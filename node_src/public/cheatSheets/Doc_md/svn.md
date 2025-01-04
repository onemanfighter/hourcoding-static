---
layout: default
title: Svn Cheat Sheet
---

<div class="content content-250">
    <div class="board">
        <h2 class="board-title">Resource</h2>
        <div class="board-card">
            <h3 class="board-card-title">Online</h3>
            <ul>
                <li><a href="http://subversion.apache.org/">Official Website</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Download</h3>
            <ul>
                <li><a href="/static/cs/subversion-cheat-sheet-v1.pdf">Subversion Cheat Sheet [.pdf]</a></li>
                <li><a href="/static/cs/svn-refcard.pdf">SVN Quick Reference Card [.pdf]</a></li>
                <li><a href="/static/cs/Cheat%20Sheet%20Subversion.pdf">Cheat Sheet Subversion [.pdf]</a></li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Related</h3>
            <ul>
                <li><a href="/bazaar" title="Bazaar Cheat Sheet">Bazaar</a></li>
                <li><a href="/cvs" title="CVS Cheat Sheet">CVS</a></li>
                <li><a href="/git" title="Git Cheat Sheet">Git</a></li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Component</h2>
        <div class="board-card">
            <ul>
                <li>svn</li>
                <li class="tip">Command line program</li>
                <li>svnversion</li>
                <li class="tip">Revision of working copy</li>
                <li>svnlook</li>
                <li class="tip">Inspect repository</li>
                <li>svnadmin</li>
                <li class="tip">Repository administration</li>
                <li>svndumpfilter</li>
                <li class="tip">Filter repository stream</li>
                <li>mod_dav_svn</li>
                <li class="tip">Apache module</li>
                <li>svnserve</li>
                <li class="tip">SVN server (SVN protocol)</li>
                <li>svnsync</li>
                <li class="tip">Mirror repository</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Checkout & Help</h2>
        <div class="board-card">
            <h3 class="board-card-title">Checkout Working Copy</h3>
            <ul>
                <li>$ svn checkout "/path/to/repository"</li>
                <li class="tip">Checkout working copy into current folder</dli>
                <li>$ svn checkout "/path/to/repository" "/path/to/folder"</li>
                <li class="tip">Checkout working copy into target folder</dli>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">SVN Help</h3>
            <ul>
                <li>$ svn help</li>
                <li>$ svn help import</li>
                <li class="tip">Show help for "import" command</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Commit</h2>
        <div class="board-card">
            <ul>
                <li>$ svn commit "/path"</li>
                <li class="tip">Commit changes to path</dli>
                <li>$ svn commit -m "Message" "/path"</li>
                <li class="tip">Commit with log message</dli>
                <li>$ svn commit -N "/path"</li>
                <li class="tip">Commit without recursion</dli>
                <li>$ svn import "/path/to/folder" "/path"</li>
                <li class="tip">Import and commit local folder</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Update</h2>
        <div class="board-card">
            <ul>
                <li>$ svn update "/path"</li>
                <li class="tip">Update path</dli>
                <li>$ svn update -r9 "/path"</li>
                <li class="tip">Update path to revision 9</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Diff / Revert / Merge</h2>
        <div class="board-card">
            <h3 class="board-card-title">Differences Between Files</h3>
            <ul>
                <li>$ svn diff "/path/file"</li>
                <li>$ svn diff "/path/file@2" "/path/file@7"</li>
                <li>$ svn diff -r 2:7 "/path/folder"</li>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Revert</h3>
            <ul>
                <li>$ svn revert "/path"</li>
                <li class="tip">Revert changes to path</dli>
                <li>$ svn revert -R "/path"</li>
                <li class="tip">Revert changes recursively</dli>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Merge Changes</h3>
            <ul>
                <li>$ svn merge -r2:7 "item" "/path"</li>
                <li class="tip">Apply diff between revisions 2 and 7 of "item" to path</dli>
                <li>$ svn merge "url1" "url2" "/path"</li>
                <li class="tip">Apply diff between "url1" and "url2" to path</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Add / Delete</h2>
        <div class="board-card">
            <h3 class="board-card-title">Add Files / Folders</h3>
            <ul>
                <li>$ svn add *</li>
                <li class="tip">Add all items, recursively</dli>
                <li>$ svn add itemname</li>
                <li class="tip">Add itemname (if folder, adds recursively)</dli>
                <li>$ svn add * --force</li>
                <li class="tip">Force recursion into versioned directories</dli>
            </ul>
        </div>
        <div class="board-card">
            <h3 class="board-card-title">Deleteing Copying Moving</h3>
            <ul>
                <li>$ svn delete "/path"</li>
                <li class="tip">Delete path</dli>
                <li>$ svn -m "Delete message" delete "/path"</li>
                <li class="tip">Delete with log message</dli>
                <li>$ svn copy "/source" "/target"</li>
                <li class="tip">Copy source to target</dli>
                <li>$ svn move "/source" "/target"</li>
                <li class="tip">Move source to target</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Logs and Blame</h2>
        <div class="board-card">
            <ul>
                <li>$ svn log "/path"</li>
                <li class="tip">Show log messages for path</dli>
                <li>$ svn blame "/path"</li>
                <li class="tip">Show commits for path</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Protocols</h2>
        <div class="board-card">
            <ul>
                <li>file://</li>
                <li class="tip">Local machine</li>
                <li>http://</li>
                <li class="tip">HTTP (Apache)</li>
                <li>https://</li>
                <li class="tip">HTTPS (SSL)</li>
                <li>svn://</li>
                <li class="tip">SVN (svnserve)</li>
                <li>svn+ssh://</li>
                <li class="tip">SVN over SSH</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Repo Admin</h2>
        <div class="board-card">
            <ul>
                <li>$ svnadmin create "/path/to/repository"</li>
                <li class="tip">Create new repository</dli>
                <li>$ svnadmin setlog "/path" r 7 message.txt</li>
                <li class="tip">Change log message for revision 7 to contents of file message.txt</dli>
                <li>$ svnadmin dump "/path/to/repository" &gt; filename</li>
                <li class="tip">Dump repository to file (backup)</dli>
                <li>$ svnadmin load "/path/to/repository" &lt; filename</li>
                <li class="tip">Load repository from file (restore)</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Miscellaneous</h2>
        <div class="board-card">
            <ul>
                <li>$ svn resolve "/path"</li>
                <li class="tip">Resolve conflict</dli>
                <li>$ svn cleanup "/path"</li>
                <li class="tip">Remove locks and complete operations</dli>
                <li>$ svn lock "/path"</li>
                <li class="tip">Lock path</dli>
                <li>$ svn unlock "/path"</li>
                <li class="tip">Unlock path</dli>
                <li>$ svn status "/path"</li>
                <li class="tip">Get path status</dli>
                <li>$ svn cat "/path"</li>
                <li class="tip">View file contents</dli>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Item and Property Statuses</h2>
        <div class="board-card">
            <ul>
                <li>&nbsp;</li>
                <li class="tip">No modifications (blank)</li>
                <li>A</li>
                <li class="tip">Addition</li>
                <li>D</li>
                <li class="tip">Deletion</li>
                <li>M</li>
                <li class="tip">Modified</li>
                <li>R</li>
                <li class="tip">Item replaced</li>
                <li>C</li>
                <li class="tip">In conflict</li>
                <li>X</li>
                <li class="tip">Externals definition</li>
                <li>I</li>
                <li class="tip">Ignored</li>
                <li>?</li>
                <li class="tip">Not in repository</li>
                <li>!</li>
                <li class="tip">Item missing</li>
                <li>~</li>
                <li class="tip">Object type changed</li>
            </ul>
        </div>
    </div>
    <div class="board">
        <h2 class="board-title">Argument Shortcuts</h2>
        <div class="board-card">
            <ul>
                <li>-m "Message"</li>
                <li class="tip">--message</li>
                <li>-q</li>
                <li class="tip">--quiet</li>
                <li>-v</li>
                <li class="tip">--verbose</li>
                <li>-r</li>
                <li class="tip">--revision</li>
                <li>-c</li>
                <li class="tip">--change</li>
                <li>-t</li>
                <li class="tip">--transaction</li>
                <li>-R</li>
                <li class="tip">--recursive</li>
                <li>-N</li>
                <li class="tip">--non-recursive</li>
            </ul>
        </div>
    </div>
</div>
