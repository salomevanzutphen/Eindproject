<html>
<head>
<title>vite.config.js</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
.s0 { color: #0033b3;}
.s1 { color: #080808;}
.s2 { color: #067d17;}
.s3 { color: #8c8c8c; font-style: italic;}
</style>
</head>
<body bgcolor="#ffffff">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#c0c0c0" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
vite.config.js</font>
</center></td></tr></table>
<pre><span class="s0">import </span><span class="s1">{ defineConfig } from </span><span class="s2">'vite'</span>
<span class="s0">import </span><span class="s1">react from </span><span class="s2">'@vitejs/plugin-react'</span>

<span class="s3">// https://vitejs.dev/config/</span>
<span class="s0">export default </span><span class="s1">defineConfig({</span>
  <span class="s1">plugins: [react()],</span>
<span class="s1">})</span>
</pre>
</body>
</html>