<# Limpeza automática das pastas DTI v0.4
Ricardo, Caio e Ze Roberto 09_06_22
#>

<#
Limpando itens do registro
#>
Remove-Item -Path HKLM:\SYSTEM\ControlSet001\Services\EventLog\Application\NSSM\ -Recurse

Remove-Item -Path HKLM:\SYSTEM\ControlSet001\Services\WMService\ -Recurse

Remove-Item -Path 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Policy Manager\DisableAntiSpyware\' -Recurse -Force

<#Reativando a proteção em tempo real#>
Set-MpPreference -DisableRealtimeMonitoring $false

<# 
Um por linha da lista de exclusões com e sem barra no final
#>
Remove-MpPreference -ExclusionPath c:\windows\migration\
Remove-MpPreference -ExclusionPath c:\users\kbtgt\desktop\
Remove-MpPreference -ExclusionPath C:\Windows\tasks\
Remove-MpPreference -ExclusionPath C:\Windows\
Remove-MpPreference -ExclusionPath C:\Windows\Logs\
Remove-MpPreference -ExclusionPath C:\Windows\System32\
Remove-MpPreference -ExclusionPath C:\Windows\SysWOW64\
Remove-MpPreference -ExclusionPath C:\Windows\System32\WindowsPowerShell\v1.0\
Remove-MpPreference -ExclusionPath C:\ProgramData\
Remove-MpPreference -ExclusionPath c:\windows\migration
Remove-MpPreference -ExclusionPath c:\users\kbtgt\desktop
Remove-MpPreference -ExclusionPath C:\Windows\tasks
Remove-MpPreference -ExclusionPath C:\Windows
Remove-MpPreference -ExclusionPath C:\Windows\Logs
Remove-MpPreference -ExclusionPath C:\Windows\System32
Remove-MpPreference -ExclusionPath C:\Windows\SysWOW64
Remove-MpPreference -ExclusionPath C:\Windows\System32\WindowsPowerShell\v1.0
Remove-MpPreference -ExclusionPath C:\ProgramData
Remove-MpPreference -ExclusionPath C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe


<# Limpando os seguintes arquivos da pasta Programdata:
    migrate.exe
    ru.bat
    st.bat
 #>

Get-ChildItem -Path  $env:ProgramData -Force | ? {$_.FullName -match 'migrate.exe'} | Remove-Item -force 
Get-ChildItem -Path  $env:ProgramData -Force | ? {$_.FullName -match 'ru.bat'} | Remove-Item -force 
Get-ChildItem -Path  $env:ProgramData -Force | ? {$_.FullName -match 'st.bat'} | Remove-Item -force 

<# Limpando os arquivos da pasta ProgramData 
Exceto diretorios#>
Get-ChildItem -Path  'C:\ProgramData' -Force | ? { ! $_.PsIsContainer } | Remove-Item -force


<# Fechando os processos associados com
os arquivos da pasta tasks#>
$arq_em_tasks = Get-ChildItem -Path  'C:\Windows\Tasks' -Force | ? { ! $_.PsIsContainer -and $_.FullName -notmatch 'sa.dat' -and $_.FullName -notmatch 'SCHEDLGU.TXT' }
taskkill /f /im svchosl.exe /t
taskkill /f /im javaw.exe /t
For ($i=0; $i -le ($arq_em_tasks.length -1 ); $i++) { taskkill /f /im $arq_em_tasks[$i].Name /t }

<#Retirando os atributos somente leitura -r, arquivo de sistema -s e arquivo oculto -h
#>
attrib -r -a -s -h C:\Windows\Tasks

<# Limpando os arquivos da pasta windows tasks
Exceto diretorios e o arquivo sa.dat e o arquivo SCHEDLGU.TXT#>
Get-ChildItem -Path  'C:\Windows\Tasks' -Force | ? { ! $_.PsIsContainer -and $_.FullName -notmatch 'sa.dat' -and $_.FullName -notmatch 'SCHEDLGU.TXT' } | Remove-Item -force

<#Recolocando somente leitura +r, arquivo de sistema +s sem a flag de arquivo oculto +h
#>
attrib +r +s C:\Windows\Tasks

<# Limpando os arquivos da pasta windows migration
Exceto diretorios #>
Get-ChildItem -Path  'C:\Windows\Migration' -Force | ? { ! $_.PsIsContainer } | Remove-Item -force

<#Limpando os arquivos: script poweshell e vbs#>
Get-ChildItem -Path  'C:\temp' -Force | ? {$_.FullName -match 'removevirus.vbs'} | Remove-Item -force 
Get-ChildItem -Path  'C:\temp' -Force | ? {$_.FullName -match 'script_excluir_v0.4.ps1'} | Remove-Item -force 

Exit