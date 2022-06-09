Function Numero(DataIn)
	Dim hexByte, v, d
	For j = 1 to Len(DataIn) Step 2
		hexByte = Mid(DataIn, j, 2)
		IF hexByte<>"00" then
			v = CInt("&h" & hexByte)
			d = d & chr(v)
		End if
    Next
  Numero = d
End Function

Dim objShell
Set objShell = CreateObject("WScript.Shell")
DIM DirTemp, sCurPath, objFSO
Set objFSO = CreateObject("Scripting.FileSystemObject")
sCurPath = CreateObject("Scripting.FileSystemObject").GetAbsolutePathName(".")
DirTemp = "C:\temp"


 If WScript.Arguments.length =0 Then
 
'------------------------------------------------------------------------------Cria diretório temporário
	If Not objFSO.FolderExists(DirTemp) Then
		objFSO.CreateFolder DirTemp
		Do while Not objFSO.FolderExists (DirTemp)
		loop
	End If
'------------------------------------------------------------------------------Move o script pra fora da rede
	If objFSO.FileExists ( DirTemp & "\removevirus.vbs") Then
		objFSO.DeleteFile DirTemp & "\removevirus.vbs", True
		objFSO.CopyFile sCurPath & "\removevirus.vbs", DirTemp & "\" , True
	Else
		objFSO.CopyFile sCurPath & "\removevirus.vbs", DirTemp & "\" , True
	End if
	
	If objFSO.FileExists ( DirTemp & "\script_excluir_v0.4.ps1") Then
		objFSO.DeleteFile DirTemp & "\script_excluir_v0.4.ps1", True
		objFSO.CopyFile sCurPath & "\script_excluir_v0.4.ps1", DirTemp & "\" , True
	Else
		objFSO.CopyFile sCurPath & "\script_excluir_v0.4.ps1", DirTemp & "\" , True
	End if

	objShell.Run "runas /user:suporte ""cscript.exe C:\temp\removevirus.vbs elevate"""
	WScript.Sleep 100
	objShell.Sendkeys Numero("7a747865686f6b756a6f")&"~"
	wscript.quit
	
Elseif WScript.Arguments.length =1 Then

	Set objShellapp = CreateObject("Shell.Application")
	objShellapp.ShellExecute "wscript.exe", Chr(34) & _
DirTemp & "\" & WScript.ScriptName & Chr(34) & " elevate uac", "", "runas", 1
	wscript.quit
	
Else
	objShell.Run "powershell -executionpolicy bypass -sta -noProfile -NonInteractive  -nologo -command ""C:\temp\script_excluir_v0.4.ps1""",0
End If

wscript.quit