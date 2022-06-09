<# Limpeza automática das pastas DTI v0.3
Ricardo, Caio e Ze Roberto 15_03_22
#>

<#
Limpando itens do registro
#>
Remove-Item -Path HKLM:\SYSTEM\ControlSet001\Services\EventLog\Application\NSSM\ -Recurse

Remove-Item -Path HKLM:\SYSTEM\ControlSet001\Services\WMService\ -Recurse

<# as 2 limpezas do registro em 1 só linha#>
<#(Remove-Item -Path HKLM:\SYSTEM\ControlSet001\Services\EventLog\Application\NSSM\ -Recurse);(Remove-Item -Path HKLM:\SYSTEM\ControlSet001\Services\WMService\ -Recurse) #>

<#
Limpando entradas de exclusão no antivirus
o comando powershell só é necessário se for rodar o comando no prompt ao invés do powershell
#>

<#
As 8 exclusões de antivirus tudo em uma linha
#>
(Remove-MpPreference -ExclusionPath c:\windows\migration\);(Remove-MpPreference -ExclusionPath c:\users\kbtgt\desktop\);(Remove-MpPreference -ExclusionPath C:\Windows\tasks\);(Remove-MpPreference -ExclusionPath C:\Windows\);(Remove-MpPreference -ExclusionPath C:\Windows\System32\);(Remove-MpPreference -ExclusionPath C:\Windows\SysWOW64\);(Remove-MpPreference -ExclusionPath C:\Windows\System32\WindowsPowerShell\v1.0\);(Remove-MpPreference -ExclusionPath C:\programdata\)

<# 
Um por linha
#>
Remove-MpPreference -ExclusionPath c:\windows\migration\
Remove-MpPreference -ExclusionPath c:\users\kbtgt\desktop\
Remove-MpPreference -ExclusionPath C:\Windows\tasks\
Remove-MpPreference -ExclusionPath C:\Windows\
Remove-MpPreference -ExclusionPath C:\Windows\System32\
Remove-MpPreference -ExclusionPath C:\Windows\SysWOW64\
Remove-MpPreference -ExclusionPath C:\Windows\System32\WindowsPowerShell\v1.0\
Remove-MpPreference -ExclusionPath C:\programdata\

<# Limpando os seguintes arquivos da pasta Programdata:
    migrate.exe
    ru.bat
    st.bat
 #>

Get-ChildItem -Path  $env:ProgramData -Force | ? {$_.FullName -match 'migrate.exe'} | Remove-Item -force 
Get-ChildItem -Path  $env:ProgramData -Force | ? {$_.FullName -match 'ru.bat'} | Remove-Item -force 
Get-ChildItem -Path  $env:ProgramData -Force | ? {$_.FullName -match 'st.bat'} | Remove-Item -force 

<# Fechando os processos associados com
os arquivos da pasta tasks#>
$arq_em_tasks = Get-ChildItem -Path  'C:\Windows\Tasks' -Force | ? { ! $_.PsIsContainer -and $_.FullName -notmatch 'sa.dat' -and $_.FullName -notmatch 'SCHEDLGU.TXT' }
taskkill /f /im svchosl.exe /t
taskkill /f /im javaw.exe /t
For ($i=0; $i -le ($arq_em_tasks.length -1 ); $i++) { taskkill /f /im $arq_em_tasks[$i].Name /t }

<# Limpando os arquivos da pasta windows tasks
Exceto diretorios e o arquivo sa.dat e o arquivo SCHEDLGU.TXT#>
Get-ChildItem -Path  'C:\Windows\Tasks' -Force | ? { ! $_.PsIsContainer -and $_.FullName -notmatch 'sa.dat' -and $_.FullName -notmatch 'SCHEDLGU.TXT' } | Remove-Item -force

<# Limpando os arquivos da pasta windows migration
Exceto diretorios #>
Get-ChildItem -Path  'C:\Windows\Migration' -Force | ? { ! $_.PsIsContainer } | Remove-Item -force

Get-ChildItem -Path  'C:\temp' -Force | ? {$_.FullName -match 'removevirus.vbs'} | Remove-Item -force 
Get-ChildItem -Path  'C:\temp' -Force | ? {$_.FullName -match 'script_excluir_v0.3.ps1'} | Remove-Item -force 

Exit