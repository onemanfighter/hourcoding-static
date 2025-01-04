---
layout: default
title: mod_rewrite Cheat Sheet
---

<div class="content">
    <div class="board">
        <h2 class="board-title">Resource</h2>
        <div class="board-card">
            <h3 class="board-card-title">Download</h3>
            <ul>
                <li><a href="/static/cs/mod_rewrite_cheat_sheet.pdf">mod_rewrite Cheat Sheet [.pdf]</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Related</h3>
            <ul>
                <li><a href="/apache" title="Apache Cheat Sheet">Apache</a></li>
                <li><a href="/htaccess" title="htaccess Cheat Sheet">htaccess</a></li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">RewriteRule Flags</h2>
        <div class="board-card">
            <ul>
                <li>C</li>
                <li class="tip">Chained with next rule</li>
                <li>CO=cookie</li>
                <li class="tip">Set specified cookie</li>
                <li>E=var:-value</li>
                <li class="tip">Set environmental variable “var” to “value”</li>
                <li>F</li>
                <li class="tip">Forbidden (403 header)</li>
                <li>G</li>
                <li class="tip">Gone no longer exists</li>
                <li>H=handler</li>
                <li class="tip">Set handler</li>
                <li>L</li>
                <li class="tip">Last stop processing rules</li>
                <li>N</li>
                <li class="tip">Next continue processing</li>
                <li>NC</li>
                <li class="tip">Case insensitive</li>
                <li>NE</li>
                <li class="tip">Do not escape output</li>
                <li>NS</li>
                <li class="tip">Ignore if subrequest</li>
                <li>P</li>
                <li class="tip">Proxy</li>
                <li>PT</li>
                <li class="tip">Pass through</li>
                <li>R[=code]</li>
                <li class="tip">Redirect to new URL, with optional code (see below)</li>
                <li>QSA</li>
                <li class="tip">Append query string</li>
                <li>S=x</li>
                <li class="tip">Skip next x rules</li>
                <li>T=mime-type</li>
                <li class="tip">Set mime type</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">RegExp</h2>
        <div class="board-card">
            <h3 class="board-card-title">Regular Expressions Syntax</h3>
            <ul>
                <li>^</li>
                <li class="tip">Start of string</li>
                <li>$</li>
                <li class="tip">End of string</li>
                <li>.</li>
                <li class="tip">Any single character</li>
                <li>(a|b)</li>
                <li class="tip">a or b</li>
                <li>(...)</li>
                <li class="tip">Group section</li>
                <li>[abc]</li>
                <li class="tip">In range (a, b or c)</li>
                <li>[^abc]</li>
                <li class="tip">Not in range</li>
                <li>\s</li>
                <li class="tip">White space</li>
                <li>a?</li>
                <li class="tip">Zero or one of a</li>
                <li>a*</li>
                <li class="tip">Zero or more of a</li>
                <li>a*?</li>
                <li class="tip">Zero or more, ungreedy</li>
                <li>a+</li>
                <li class="tip">One or more of a</li>
                <li>a+?</li>
                <li class="tip">One or more, ungreedy</li>
                <li>a{3}</li>
                <li class="tip">Exactly 3 of a</li>
                <li>a{3,}</li>
                <li class="tip">3 or more of a</li>
                <li>a{,6}</li>
                <li class="tip">Up to 6 of a</li>
                <li>a{3,6}</li>
                <li class="tip">3 to 6 of a</li>
                <li>a{3,6}?</li>
                <li class="tip">3 to 6 of a, ungreedy</li>
                <li>\</li>
                <li class="tip">Escape character</li>
                <li>[:punct:]</li>
                <li class="tip">Any punctu-ation symbol</li>
                <li>[:space:]</li>
                <li class="tip">Any space character</li>
                <li>[:blank:]</li>
                <li class="tip">Space or tab</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Directives</h2>
        <div class="board-card">
            <ul>
                <li>RewriteEngine</li>
                <li>RewriteOptions</li>
                <li>RewriteLog</li>
                <li>RewriteLogLevel</li>
                <li>RewriteLock</li>
                <li>RewriteMap</li>
                <li>RewriteBase</li>
                <li>RewriteCond</li>
                <li>RewriteRule</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Miscellaneous</h2>
        <div class="board-card">
            <h3 class="board-card-title">RewriteCond Flags</h3>
            <ul>
                <li>NC</li>
                <li class="tip">Case insensitive</li>
                <li>OR</li>
                <li class="tip">Combine with next rule using 'OR' instead of the default of 'AND'</li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Redirection Header Codes</h3>
            <ul>
                <li>301</li>
                <li class="tip">Moved permanently</li>
                <li>302</li>
                <li class="tip">Moved temporarily (default)</li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Sample Rule: Site Moved</h3>
            <ul>
                <li class="tip"># Site moved permanently</li>
                <li>RewriteCond   %{HTTP_HOST}   ^www.domain.com$   [NC]</li>
                <li>RewriteRule   ^(.*)$   http://www.domain2.com/$1   [R=301,L]</li>
                <li class="tip">Rewrites domain.com to domain2.com</li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Sample Rule: Temporary Page Move</h3>
            <ul>
                <li class="tip"># Page has moved temporarily</li>
                <li>RewriteRule   ^page.html$   new_page.html   [R,NC,L]</li>
                <li class="tip">Rewrites domain.com/page.html to domain.com/new_page.html</li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Sample Rule: Nice URLs</h3>
            <ul>
                <li class="tip"># Nice URLs (no query string)</li>
                <li>RewriteRule   ^([A-Za-z0-9]+)/?$   categories.php?name=$1 [L]</li>
                <li class="tip">Rewrites domain.com/categoryname1/ to domain.com/categories.php?name=category-name1</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">HTTP Headers</h2>
        <div class="board-card">
            <ul>
                <li>%{HTTP_USER_AGENT}</li>
                <li>%{HTTP_REFERER}</li>
                <li>%{HTTP_COOKIE}</li>
                <li>%{HTTP_FORWARDED}</li>
                <li>%{HTTP_HOST}</li>
                <li>%{HTTP_PROXY_CONNECTION}</li>
                <li>%{HTTP_ACCEPT}</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Server Internals</h2>
        <div class="board-card">
            <ul>
                <li>%{DOCUMENT_ROOT}</li>
                <li>%{SERVER_ADMIN}</li>
                <li>%{SERVER_NAME}</li>
                <li>%{SERVER_ADDR}</li>
                <li>%{SERVER_PORT}</li>
                <li>%{SERVER_PROTOCOL}</li>
                <li>%{SERVER_SOFTWARE}</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Special</h2>
        <div class="board-card">
            <ul>
                <li>%{API_VERSION}</li>
                <li>%{THE_REQUEST}</li>
                <li>%{REQUEST_URI}</li>
                <li>%{REQUEST_FILENAME}</li>
                <li>%{IS_SUBREQ}</li>
                <li>%{HTTPS}</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Request</h2>
        <div class="board-card">
            <ul>
                <li>%{REMOTE_ADDR}</li>
                <li>%{REMOTE_HOST}</li>
                <li>%{REMOTE_PORT}</li>
                <li>%{REMOTE_USER}</li>
                <li>%{REMOTE_IDENT}</li>
                <li>%{REQUEST_METHOD}</li>
                <li>%{SCRIPT_FILENAME}</li>
                <li>%{PATH_INFO}</li>
                <li>%{QUERY_STRING}</li>
                <li>%{AUTH_TYPE}</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Time</h2>
        <div class="board-card">
            <ul>
                <li>%{TIME_YEAR}</li>
                <li>%{TIME_MON}</li>
                <li>%{TIME_DAY}</li>
                <li>%{TIME_HOUR}</li>
                <li>%{TIME_MIN}</li>
                <li>%{TIME_SEC}</li>
                <li>%{TIME_WDAY}</li>
                <li>%{TIME}</li>
            </ul>
        </div>
    </div>
</div>
