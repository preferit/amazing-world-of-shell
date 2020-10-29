import React from 'react';
import { Sheet } from '../../molecules';
import { Content } from '../../molecules';
import { StickyFooter } from '../../molecules';
import { TitleImg } from '../../molecules';

export const AmazingWorldOfVi = () => {
    let imgUrl = require('../../../assets/images/amazingWorldOfVim.png');
    return (
        <Content>
            <h1>Welcome</h1>
            <h2>to</h2>

            <TitleImg imgPath={imgUrl} alt="cool picture" />
            <h2 id="WhyVi">Why Vi/m?</h2>
            <p>Vi or Vim (Vi imporved) is a text editor that can be found almost on every unix/linux based machine.</p>
            <p>If you connect to a dishwasher you can be almost certain that Vi/m will be available on that machine.</p>
            <p>Therefor it is of GREAT importance to know how to use this mythical and mysterious text editor.</p>
            <h3 id="FirstThingsFirst">First things first.</h3>
            <p>To open Vi/m simply type vi end hit the return button and Vi/m will be in action. To open a file</p>
            <p>for editing with Vi/m simply type vi followed_by_your_filename. Don't worry if the file does not exist</p>
            <p>Vi/m will kindly create it for you.</p>
            <h3 id="SecondThingsFirst">Second things first???</h3>
            <p>To open Vi/m is of course a heavenly feeling, but however one needs to know how to quit Vi/m</p>
            <p>otherwise one will be stuck in Vi/m heaven for ever.</p>
            <p>To quit Vi/m when opened in your terminal simply do the following:</p>
            <ol>
                <li>Hit the ESC key</li>
                <li>Type the following :q!</li>
                <li>Hit the RETURN key</li>
            </ol>
            <p>And you will acsend from Vi/m heaven, however the acsention is without saving the file you are editing.</p>
            <p>To ascend from Vi/m heaven, with saveing your file on the the way down simply do the following:</p>
            <ol>
                <li>Hit the ESC key</li>
                <li>Type the following :x or :wq</li>
                <li>Hit the RETURN key</li>
            </ol>
            <h2 id="GSTH">Good stuff to know and have navigating Vi/m heaven.</h2>
            <p>Remeber Vi/m has two modes:</p>
            <ol>
                <li>The command mode</li>
                <li>The insert mode</li>
            </ol>
            <p>In the command mode, user can move around the file, delete text, etc. In the insert mode, user can insert text.</p>
            <p>To switch between command mode and insert mode use one of the following commands (in command mode):</p>
            <ul>
                <li><b>a</b> starts to insert after the current cursor placement</li>
                <li><b>A</b> starts to insert at the end of the line where the cursor is placed</li>
                <li><b>i</b> starts to insert before the current cursor placement</li>
                <li><b>I</b> starts to insert at the start of the line where the cursor is placed</li>
                <li><b>o</b> starts to insert at the beginning of the line below where the cursor is placed</li>
                <li><b>O</b> starts to insert at the beginning of the line above where the cursor is placed</li>
            </ul>
            <p>And to switch between insert mode and command mode simply hit the <b>ESC</b> key.</p>
            <p>To navigate your coursor in Vi/m simply use the arrow keys.</p>
            <p>IF the arrow keys are not present one can navigate by:</p>
            <ol>
                <li>Hit the ESC key</li>
                <li>
                    <ul>
                        <li><b>h</b> key: moves the coursor to the left</li>
                        <li><b>j</b> key: moves the coursor downwards</li>
                        <li><b>k</b> key: moves the coursor upwards</li>
                        <li><b>l</b> key: moves the coursor to the right</li>
                    </ul>
                </li>
            </ol>
            <p>Good luck and have fun</p>
            <h2 id="CheatSheets">Cheat sheets</h2>
            <h3>Vi editor command keys:</h3>
            <Sheet>{`
            ZZ      Exit, saving changes                    t&lt;x&gt;   Up to &lt;x&gt; forward
            Q       Enter ex mode                           T&lt;x&gt;   Back up to &lt;x&gt;
            &lt;ESC&gt;   End of insert                     &lt;x&gt;|   Go to column &lt;x&gt;
            :&lt;cmd&gt;  Execute ex command                w,W    Forward one word
            :!&lt;cmd&gt; Shell command                     b,B    Back one word
            ^g      Show filename/size                      e,E    End of word
            ^f      Forward one screen                      ^h     Erase last character
            ^b      Back one screen                         ^w     Erase last word
            ^d      Forward half screen                     ^?     Interrupt
            ^u      Backward half screen                    ~      Toggle character case
            &lt;x&gt;G    Go to line &lt;x&gt;              a      Append after
            /&lt;x&gt;    Search forward for &lt;x&gt;      i,I    Insert before
            ?&lt;x&gt;    Search backward for &lt;x&gt;     A      Append at end of line
            n       Repeat last search                      o      Open line below
            N       Reverse last search                     O      Open line above
            ]]      Next section/function                   r      Replace character
            [[      Previous section/function               R      Replace characters
            %       Find matching () { or }                 d      Delete
            ^l      Redraw screen                           dd     Delete line
            ^r      Refresh screen                          c      Change              
            z&lt;CR&gt;   Current line at top               y      Yank lines to buffer
            z-      Current line at bottom                  C      Change rest of line 
            ^e      Scroll down one line                    D      Delete rest of line 
            ^y      Scroll up one line                      s      Substitute character
            \`\`      Previous context                        S      Substitute lines    
            H       Home window line                        J      Join lines          
            L       Last window line                        x      Delete after        
            M       Middle window line                      X      Delete before       
            +       Next line                               Y      Yank current line   
            hjkl    Cursor movement:                        p      Put back lines      
                    left/down/up/right                      P      Put before          
            0       Beginning of line                       &lt;&lt;     Shift line left     
            $       End of line                             &gt;&gt;     Shift line right    
            f&lt;x&gt;    Find &lt;x&gt; forward            u      Undo last change    
            F&lt;x&gt;    Find &lt;x&gt; backward           U      Restore current line
                `}</Sheet>
            <h3>Ex mode commands:</h3>
            <Sheet>{`
            q       Quit                                    set <x>   Enable option
            q!      Quit, discard changes                   set no<v> Disable option
            r <f>   Read in file <f>                        set all   Show all options
            sh      Invoke shell
            vi      Vi mode
            wq      Write and quit
            w <f>   Write file <f>
            w! <f>  Overwrite file <f>
                `}</Sheet>
            <h3>Options:</h3>
            <Sheet>{`
            autoindent                                      Automatic line indentation
            autowrite                                       Write before quit
            ignorecase                                      Ignore case in searches
            number                                          Display line numbers
            showmatch                                       Show matches to ) and } as typed
            terse                                           Quiet mode
            wrapscan                                        Wraparound in searches
            wrapmargin                                      Automatic line splitting
                `}</Sheet>
            <br />
            <br />
            <StickyFooter>
                <a href="#WhyVi"><b>Why Vi/m</b></a>
                <a href="#FirstThingsFirst"><b>First things first</b></a>
                <a href="#SecondThingsFirst"><b>Second things first???</b></a>
                <a href="#GSTH"><b>Good Stuff To Have (GSTH)</b></a>
                <a href="#CheatSheets"><b>Cheat sheets</b></a>
            </StickyFooter>
        </Content>
    )
}