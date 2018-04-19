<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<head>
  <title>BOOKS R Us - FAQ's</title>
  <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>
<body>
  <center>
       <h1>
         FAQ's - Frequent Doubts and queries our users have--
       </h1>
       <h3>
         <i>
           Each and Everything, you need to know about.
         </i>
       </h3>
     </center>
  <h1>QUESTIONS :</h1>
      <table style="position: relative; width:100%;">
      <tr>
        <td><h3>Our Developer Questions</h3></td>
        <td><h3>Date</h3></td>
        <td><h3>Issues Resolved</h3></td>
        <td><h3>Likes</h3></td>
      </tr>
      <xsl:for-each select="posts/pd">
        <tr>
             <td><h4><a href = "threads/{id}"><xsl:value-of select="title"/></a></h4></td>
             <td><xsl:value-of select="time"/></td>
             <td><xsl:value-of select="replies"/></td>
             <td><xsl:value-of select="thanks"/></td>
        </tr>
      </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
