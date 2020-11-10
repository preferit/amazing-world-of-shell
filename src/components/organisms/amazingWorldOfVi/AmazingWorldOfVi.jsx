import React from 'react';
import { Sheet } from '../../molecules';
import { Content } from '../../molecules';
import { StickyFooter } from '../../molecules';
import { TitleImg } from '../../molecules';

export const AmazingWorldOfVi = () => {
    const imgUrl = require('../../../assets/images/amazingWorldOfVim.png');
    return (
	    <>
        <Content>
            <h1>Welcome</h1>
            <h2>to</h2>

            <TitleImg imgPath={imgUrl} alt="cool picture" />
            <h2 id="WhyVi">Why Vi/m?</h2>
	    <div>
            <p>Vi or Vim (Vi imporved) is a text editor that can be found almost on every unix/linux based machine.</p>
            <p>If you connect to a dishwasher you can be almost certain that Vi/m will be available on that machine.</p>
            <p>Therefor it is of GREAT importance to know how to use this mythical and mysterious text editor.</p>
	    </div>
            <h3 id="FirstThingsFirst">First things first.</h3>
            <p>To open Vi/m simply type vi end hit the return button and Vi/m will be in action. To open a file</p>
            <p>for editing with Vi/m simply type vi followed_by_your_filename. Don't worry if the file does not exist</p>
            <p>Vi/m will kindly create it for you.</p>
            <h3 id="SecondThingsFirst">Second things first???</h3>
            <p>To open Vi/m is of course a heavenly feeling, but however one needs to know how to quit Vi/m</p>
            <p>otherwise one will be stuck in Vi/m heaven for ever.</p>
            <p>To quit Vi/m when opened in your terminal simply do the following:</p>
            <ol>
                <li>❤ Hit the ESC key</li>
                <li>❤ Type the following :q!</li>
                <li>❤ Hit the RETURN key</li>
            </ol>
            <p>And you will acsend from Vi/m heaven, however the acsention is without saving the file you are editing.</p>
            <p>To ascend from Vi/m heaven, with saveing your file on the the way down simply do the following:</p>
            <ol>
                <li>❤ Hit the ESC key</li>
                <li>❤ Type the following :x or :wq</li>
                <li>❤ Hit the RETURN key</li>
            </ol>
            <h2 id="GSTH">Good stuff to know and have navigating Vi/m heaven.</h2>
            <p>Remeber Vi/m has two modes:</p>
            <ol>
                <li>❤ The command mode</li>
                <li>❤ The insert mode</li>
            </ol>
            <p>In the command mode, user can move around the file, delete text, etc. In the insert mode, user can insert text.</p>
            <p>To switch between command mode and insert mode use one of the following commands (in command mode):</p>
            <ul>
                <li>❤ <b>a</b> starts to insert after the current cursor placement</li>
                <li>❤ <b>A</b> starts to insert at the end of the line where the cursor is placed</li>
                <li>❤ <b>i</b> starts to insert before the current cursor placement</li>
                <li>❤ <b>I</b> starts to insert at the start of the line where the cursor is placed</li>
                <li>❤ <b>o</b> starts to insert at the beginning of the line below where the cursor is placed</li>
                <li>❤ <b>O</b> starts to insert at the beginning of the line above where the cursor is placed</li>
            </ul>
            <p>And to switch between insert mode and command mode simply hit the <b>ESC</b> key.</p>
            <p>To navigate your coursor in Vi/m simply use the arrow keys.</p>
            <p>IF the arrow keys are not present one can navigate by:</p>
            <ol>
                <li>Hit the ESC key</li>
                <li> 
                    <ul>
                        <li>❤ <b>h</b> key: moves the coursor to the left</li>
                        <li>❤ <b>j</b> key: moves the coursor downwards</li>
                        <li>❤ <b>k</b> key: moves the coursor upwards</li>
                        <li>❤ <b>l</b> key: moves the coursor to the right</li>
                    </ul>
                </li>
            </ol>
            <h2 id="CheatSheets">Cheat sheets</h2>
            <h3>Most important stuff</h3>
            <Sheet>{`
ESC     End of insert                 
i       Insert before           
I       Insert at start of line    
A       Append at end of line  
a       Append after
:q      Exit vi :'( 
:q!     Force exit vi :'( :'(
:x      Exit and save
:wq     Exit and save
h       Moves the coursor to the left
j       Moves the coursor downwards
k       Moves the coursor upwards
l       Moves the coursor to the right
            `}</Sheet>
            <p>Good luck and have fun</p>
            <p>
	    <br/>
	    <br/>
	    <br/>
	    <br/>
	    <br/>
	    <br/>
	    <br/>
	    <br/>
	    </p>
        </Content>
            <StickyFooter>
                <a href="#WhyVi"><b>Why Vi/m</b></a>
                <a href="#FirstThingsFirst"><b>First things first</b></a>
                <a href="#SecondThingsFirst"><b>Second things first???</b></a>
                <a href="#GSTH"><b>Good Stuff To Have (GSTH)</b></a>
                <a href="#CheatSheets"><b>Cheat sheets</b></a>
            </StickyFooter>
	    </>
    )
}
