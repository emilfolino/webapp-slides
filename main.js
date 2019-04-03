import slideorama from "slideorama";

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import "highlight.js/styles/monokai-sublime.css";

slideorama.init("presentation", "slide-container");
hljs.initHighlightingOnLoad();
