f1::
run,C:\Windows\notepad.exe
winwait,ahk_exe notepad.exe
;sleep,1000
send,123
send, {Enter}
send,456
send,{Enter}
msgbox,,,완성!

Escape::ExitApp