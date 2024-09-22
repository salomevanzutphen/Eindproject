<html>
<head>
<title>.eslintrc.cjs</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
.s0 { color: #080808;}
.s1 { color: #0033b3;}
.s2 { color: #067d17;}
.s3 { color: #1750eb;}
</style>
</head>
<body bgcolor="#ffffff">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#c0c0c0" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
.eslintrc.cjs</font>
</center></td></tr></table>
<pre><span class="s0">module.exports = {</span>
  <span class="s0">root: </span><span class="s1">true</span><span class="s0">,</span>
  <span class="s0">env: { browser: </span><span class="s1">true</span><span class="s0">, es2020: </span><span class="s1">true </span><span class="s0">},</span>
  <span class="s1">extends</span><span class="s0">: [</span>
    <span class="s2">'eslint:recommended'</span><span class="s0">,</span>
    <span class="s2">'plugin:react/recommended'</span><span class="s0">,</span>
    <span class="s2">'plugin:react/jsx-runtime'</span><span class="s0">,</span>
    <span class="s2">'plugin:react-hooks/recommended'</span><span class="s0">,</span>
  <span class="s0">],</span>
  <span class="s0">ignorePatterns: [</span><span class="s2">'dist'</span><span class="s0">, </span><span class="s2">'.eslintrc.cjs'</span><span class="s0">],</span>
  <span class="s0">parserOptions: { ecmaVersion: </span><span class="s2">'latest'</span><span class="s0">, sourceType: </span><span class="s2">'module' </span><span class="s0">},</span>
  <span class="s0">settings: { react: { version: </span><span class="s2">'18.2' </span><span class="s0">} },</span>
  <span class="s0">plugins: [</span><span class="s2">'react-refresh'</span><span class="s0">],</span>
  <span class="s0">rules: {</span>
    <span class="s2">'react/jsx-no-target-blank'</span><span class="s0">: </span><span class="s2">'off'</span><span class="s0">,</span>
    <span class="s2">'react-refresh/only-export-components'</span><span class="s0">: [</span>
      <span class="s2">'warn'</span><span class="s0">,</span>
      <span class="s0">{ allowConstantExport: </span><span class="s1">true </span><span class="s0">},</span>
    <span class="s0">],</span>
    <span class="s2">'react/prop-types'</span><span class="s0">: </span><span class="s2">'off'</span><span class="s0">,</span>
    <span class="s2">'react/no-unescaped-entities'</span><span class="s0">: </span><span class="s3">0</span><span class="s0">,</span>
  <span class="s0">},</span>
<span class="s0">}</span>
</pre>
</body>
</html>