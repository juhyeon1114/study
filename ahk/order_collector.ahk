Loop
{
	Process,Close,iexplore.exe ;close IE
	sleep 3000 ;
	pwb := ComObjCreate("InternetExplorer.Application") ;
	pwb.Visible := 1
	pwb.Navigate("http://a.sabangnet.co.kr/") ;
	sleep 7000 ;open webpage and wait untill page is completly loaded

	while(true){
		if (pwb.document.querySelector(".userId") <> "null") {
			break ;
		}	
	}
	pwb.document.querySelector(".userId").value:= "meemi1" ;input the id
	pwb.document.querySelector(".userPw").value:= "tmtmdsla1!" ;input the pw
	sleep 100 ;
	pwb.document.querySelector(".bt_login").click() ;login
	sleep 3000 ; 
	
	pwb.document.write("<script>window.location.href = 'http://a.sabangnet.co.kr/order/Order_collect'</script>")
	; pwb.document.location.href:= "http://a.sabangnet.co.kr/order/Order_collect"
	; pwb.Navigate("http://a.sabangnet.co.kr/order/Order_collect") ;go to order collection page
	sleep 2000 ;

	while(true){
		if (pwb.document.querySelector("table.value2") <> "null") {
			pwb.document.querySelector("table.value2").querySelectorAll("input[type='checkbox']")[0].click() ;
			sleep 500 ;
			pwb.document.querySelector("table.value2").querySelectorAll("input[type='checkbox']")[1].click() ;
			sleep 500 ;
			pwb.document.querySelector("table.value2").querySelectorAll("input[type='checkbox']")[2].click() ;check the checkboxes
			sleep 500 ;
			break ;
		}	
	}
	sleep 500 ;

	Run, enter.exe
	pwb.document.querySelector("img[value='수집처리(정상)']").click() ;get orders	
	Sleep 90000 ; 1min 30sec
	pwb.document.location.href:= "http://a.sabangnet.co.kr/logout.html" ;logout
	Sleep 500 ;
	Process,Close,iexplore.exe ;close IE
	Sleep 5000 ;
	; 주문수집 완료
	
	
	
	
	pwb := ComObjCreate("InternetExplorer.Application") ;
	pwb.Visible := 1
	pwb.Navigate("http://a.sabangnet.co.kr/") ;
	sleep 7000 ;open webpage and wait untill page is completly loaded

	while(true){
		if (pwb.document.querySelector(".userId") <> "null") {
			break ;
		}	
	}
	pwb.document.querySelector(".userId").value:= "meemi1" ;input the id
	pwb.document.querySelector(".userPw").value:= "tmtmdsla1!" ;input the pw
	sleep 100 ;
	pwb.document.querySelector(".bt_login").click() ;login
	sleep 3000 ; 
	
	pwb.document.location.href:= "http://a.sabangnet.co.kr/order/List_confirm_pdo?search_str=nan2804,ncp_1no8qt_01&search_field=mall_user_id"
	sleep 1000
	pwb.document.querySelector("input[value='검 색']").click()
	sleep 2000
	if(pwb.document.querySelector("input[value='일괄단품매핑']") <> "null") {
		pwb.document.querySelector("input[value='일괄단품매핑']").click()
		sleep 2000
		send, {Tab}
		sleep 300
		send, {Tab}
		sleep 300
		send, {Tab}
		sleep 300
		send, {Enter}
		sleep 10000
	}
	pwb.document.querySelectorAll("input[name='opt_map_yn']")[1].click()
	sleep 300
	pwb.document.querySelector("input[value='검 색']").click()
	sleep 2000
	if(pwb.document.querySelector("img[value='일괄주문확정']") <> "null") {
		Run, enter.exe
		pwb.document.querySelector("img[value='일괄주문확정']").click()
		sleep 2000
		send, {Tab}
		sleep 300
		send, {Tab}
		sleep 300
		send, {Tab}
		sleep 300
		send, {Enter}
		sleep 10000
	}
	
	pwb.document.location.href:= "http://a.sabangnet.co.kr/logout.html" ;logout
	Sleep 500 ;
	Process,Close,iexplore.exe ;close IE
	Sleep 5000 ;
}

Escape::ExitApp ;


