import { html } from 'lit-element';

export default html`
<style>
  .regular-font{font-family:var(--font-regular);}
  .mono-font{font-family:var(--font-mono);}
  .title {
      font-family:var(--font-regular);
      font-size:var(--title-font-size);
      font-weight:bold;
      margin-bottom:8px;
    }
  .sub-title{font-size: 18px;}
  .tiny-title {font-size:13px; font-weight:bold}
  .regular-font-size{ font-size:var(--regular-font-size);}
  .small-font-size{ font-size:var(--small-font-size);}
  .primary-text{ color: var(--primary-color)}
  .bold-text{ font-weight:bold}
  .upper{text-transform: uppercase;}
  h1{ font-family:var(--font-regular); font-size:20px; letter-spacing:normal; }
  h2{ font-family:var(--font-regular); font-size:18px; letter-spacing:normal; }
  h3{ font-family:var(--font-regular); font-size:16px; letter-spacing:normal; }
  h4{ font-family:var(--font-regular); font-size:15px; letter-spacing:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; letter-spacing:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; letter-spacing:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  code,
  pre{
    font-family: var(--font-mono);
  }

  .m-markdown,
  .m-markdown-small{
    display:block;
  }

  .m-markdown p,
  .m-markdown span{
    line-height:18px;
    font-size:13px;
  }
  
  .m-markdown li{
    line-height:22px;
    font-size:13px;
  }

  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li{
    color:var(--light-fg);
    font-size:12px;
    line-height:14px;
    margin-top:0;
  }
  .m-markdown-small p:not(:first-child),
  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown p,
  .m-markdown-small p{
    margin-block-end: 0
  }


  .m-markdown-small ul,
  .m-markdown-small ol{
    padding-inline-start: 20px;
  }

  .m-markdown code{
      background-color: rgba(0, 0, 0, 0.02);
      padding: 0px 6px;
      border: 1px solid var(--light-border-color);
      border-radius: 2px;
      color: var(--fg);
      font-size: calc(var(--font-mono-size) - 1px);
      line-height: var(--font-mono-line-height);
  }

  .m-markdown pre{
      white-space: pre-wrap;
      background-color: var(--pre-bg);
      color:var(--pre-fg);
      padding: 12px 14px 15px 14px;
      overflow-x: auto;
      line-height: normal;
      border-radius: 2px;
      border: 1px solid var(--pre-border-color);
  }
  .m-markdown pre code {
      border:none;
      background-color:transparent;
      color: var(--code-fg);
      font-size: var(--font-mono-size);
  }
  .m-markdown ul,
  .m-markdown ol{
      padding-inline-start:30px;
  }
  .m-markdown-small a,
  .m-markdown a{
    color:var(--link-color);
  }
  .m-markdown img{max-width:100%}

  .m-markdown.m-markdown-small code{
    font-size:calc(var(--small-font-size) - 1px);
    color:var(--light-fg);
  }
  /* Markdown table */

  .m-markdown table {
    border-spacing: 0;  
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    margin: 0;
    max-width: 100%;
  }
  .m-markdown tr:first-child td,
  .m-markdown tr:first-child th {
      border-top: 0 none;
  }
  .m-markdown td, 
  .m-markdown th{
    font-size: 12px;
    line-height: 16px;
    padding: 4px 5px 4px;
    text-align: left;
    vertical-align: top;
  }

  .m-markdown th {
    color: var(--fg2);
    height:32px;
    font-weight: 600;
    letter-spacing: normal;
    background-color: var(--bg2);
    vertical-align: bottom;
    border-bottom: 1px solid var(--border-color);
  }
  .m-markdown table code {
    font-size:calc(var(--small-font-size) - 1px);
  }
  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
</style>`;
