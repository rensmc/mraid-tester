<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MRAID Preview</title>

    <!-- PRIMARY CODE -->
    <script type="text/javascript" src="safari/mraidview.js" language="javascript"></script>
    <script type="text/javascript" src="safari/main.js" language="javascript"></script>
    <script type="text/javascript" src="safari/orientation-widget.js" defer="defer"></script>
</head>
            
<body onunload="closeAdIfOpen()">

<div id="previewControls" align="center">
    <h1>Start MRAID Preview</h1>

    <form id="setup" name="setup">

        <!-- Tag Source: -->
        <textarea name="adFragment" id="adFragment" rows="25" cols="120" placeHolder="Enter code..." >
          <?php include 'text.txt';?>
        </textarea>
        <br/><br/>

        <table cellspacing="1">
            <tr>
              <td><input type="button" value="Preview" onclick="renderHtmlAd()"/></td>
              <td><input type="button" value="Rotate" onclick="rotate()"/></td>
            </tr>
        </table>

    </form>

</div>
<script>
 //$(document).ready(function () {orientationWidget.init();logInit();});
</script>
</body>
</html>