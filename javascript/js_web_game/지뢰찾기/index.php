<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
	<meta charset="utf-8">
	<title>hi</title>
	<style>
		table{
			border-spacing: 0;
		}
		td {
			border: 1px solid black;
			width:20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			background: #444;
		}
		td.opened{
			background: white;
		}


	</style>
</head>

<body>
	<input id="hor" type="number" placeholder="가로" value="20">
	<input id="ver" type="number" placeholder="세로" value="20">
	<input id="mine" type="number" placeholder="지뢰" value="100">
	<button id="exec">실행</button>
	<table id="table">
		<thead>
			<tr>
				<td><span id="timer">0</span>초</td>
			</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>




	<script src="./mine.js"></script>
</body>
</html>