import React from 'react';
import { Content } from '../../molecules';
import { StickyFooter } from '../../molecules';
import { TitleImg } from '../../molecules';
import { Sheet } from '../../molecules';

export const Shell = () => {
    const imgUrl = require('../../../assets/images/rainbow.png');
    return (
        <Content>
            <h2 id="WhatIShell">What is shell?</h2>
            <p>A shell is a command-line interpreter which exposes access to an operating system's services.</p> 
            <p>In general, operating system shells use either a command-line interface (CLI)</p>
            <p>or graphical user interface (GUI), depending on a computer's role and particular operation.</p> 
            <p>It is named a shell because it is the outermost layer around the operating system.</p>
            <p>If you connect to a security camera (wink, wink) you can be almost certain that the outermost layer is a CLI shell,</p>
            <p>a shell that is probably a bourne shell</p>
            <h2 id="Bourne">Bourne Shell</h2>
            <p>Developed by Stephen Bourne, father of Jason (David) Bourne (Webb).</p>
            <p>A Bourne shell is the mostly spread and used CLI shell to this day, and is featured on almost</p>
            <p>every embedded unix based machine for example a security camera (wink, wink)</p>
            <h2 id="Putty">Putty</h2>
            <p>Putty is a software used by windows users to access a shell at a unix based machine.</p>
            <p>So when someone puttys to a unix based machine a shell is opened.</p>
            <p>(on a security camera a bourne shell wink, wink)</p>
            <h2 id="ShellCmd">Shell commands</h2>
            <p>As the shell we enbark our journey with is mainly Bourne shell (CLI)</p>
            <p>We will not have any fancy graphical icons or fancy applications that displays pictures and so forth,</p>
            <p>we will have to use our imagination which, still can be fun...</p>
            <h3>Commands</h3>
            <p>From here and a bit down south a couple of useful shell commands will be listed and described.</p>
            <p>The description will have a windows translator so that any windows user that reads this</p>
            <p>still can follow our journey and use once imagination to visualise what is happening.</p>
            <ul>
                <li>❤ <b>cd &lt;path&gt;</b> changes the directory you are currently exploring to the given &lt;path&gt; <br />
                                           (same as clicking a folder icon in windows) </li>
                <li>❤ <b>ls</b> lists all files in the directory you are currently exploring <br />
                              (same as a window pop up in windows that shows you all the fancy icons)</li>
                <li>❤ <b>cat &lt;file&gt;</b> displays the content of the given &lt;file&gt; <br />
                                            (same as clicking e.g a txt file in windows)</li>
                <li>❤ <b>mkdir &lt;name&gt;</b> creates a directory with the given &lt;name&gt; in the directory you are currently exploring<br />
                                              (self explanatory)</li>
                <li>❤ <b>pwd</b> displays the current directory you are exploring (incase you got lost)</li>
            </ul>
            <h2 id="GSTH">Good Stuff To Have (GSTH)</h2>
            <ul>
                <li>❤ <b>.</b> . is the current directory you are exploring e.g <br />
                             cd . means change direcotory to where I am right now (kind of useless) </li>
                <li>❤ <b>..</b> .. is the directory one level above the directory you are currently exploring e.g <br /> 
                              cd .. means climb to the direcory above</li>
                <li>❤ <b> &lt;something&gt; &gt; &lt;file&gt;</b> put whatever &lt;something&gt; returns into <br />
                                                                &lt;file&gt; e.g echo "Unicorn" &gt; rainbow.txt <br />
                                                                takes what echo "Unicorn" returns which is Unicorn and <br />
                                                                puts that in the file rainbow.txt. <br /> 
                                                                rainbow.txt does not exist? Do not worry good old shell will create it for you
                </li>
                <li>❤ <b> &lt;something&gt; &gt;&gt; &lt;file&gt;</b> appends whatever &lt;something&gt; returns at the end of &lt;file&gt; e.g <br />
                    echo "Unicorn" &gt;&gt; rainbow.txt <br />
                    takes what echo "Unicorn" returns which is Unicorn and appends that at the end of the file rainbow.txt. <br /> 
                    rainbow.txt does not exist? Do not worry good old shell will create it for you
                </li>
                <li>❤ <b>&lt;something&gt; | &lt;something_else&gt;</b> takes whatever &lt;something&gt; returns <br />
                                                                      and uses that as an argument to &lt;something_else&gt;<br /> 
                                                                      (Do not fear what you do not know... <br />
                                                                      we will get to what: <a href="ArgZ"><b>arguments</b></a> are in a bit be patient)
                </li>
            </ul>
            <h2 id="Scriptz">Scribes gonna script</h2>
            <p>So now I hope we have juorneyed through what shell is and what putty does. Next step is to create some</p>
            <TitleImg imgPath={imgUrl} alt="cool picture" />
            <h3>❤MAGIC❤</h3>
            <p>By creating some scripts that a shell (a Bourne shell) can run on its own.</p>
            <p>But before we do that is suggest you take a trip to the amazing world of Vi/m</p>
            <p>or if you allready have been to the amazing world of Vi/m lets continue.</p>
            <h3 id="CSript">Creating a script</h3>
            <p>Now open up your (Vi/m) new favorite text editor, either on your own computer or through a shell via putty</p>
            <p>e.g on a security camera (wink, wink).</p>
            <p>The first row of this newly created file should be #!/bin/sh</p>
            <p>this line tells the shell that is running your script which shell it should run it in...</p>
            <p>Confusing? Well yes of course it is!</p>
            <p>A unix based operative system that runs on a device e.g a security camera (wink again ;)),</p>
            <p>can have multiple differnet shells installed.</p>
            <p>By writing #!/bin/sh we say use what ever shell used as standard e.g a Bourne shell</p>
            <p>now save the file and make sure the file extension is .sh e.i save the file as e.g myScript.sh</p>
            <h3 id="RunScript">Running a script</h3>
            <p>when the script is created we must make sure it can be executed on the machine we intend to use it on.</p>
            <p>This is done by in a shell executing the following command:</p>
            <p>sudo chmod 775 &lt;script_name&gt;.sh</p>
            <p>One should note that the command sudo is not allways needed and that chmod 775 is overkill.</p>
            <p>Now to execute the script simply type ./&lt;script_name&gt;.sh</p>
            <p>The script created above will do nothing as it is empty but do not cry because:</p>
            <p>Next we will go through the following things:</p>
            <ul>
                <a href="#CScript"><li>❤ Creating a script</li></a>
                <a href="#RunScript"><li>❤ Running a script</li></a>
                <a href="#ArgzPass"><li>❤ Passing arguments</li></a>
                <a href="#Exitscript"><li>❤ Exiting a script</li></a>
                <a href="#SimpleCmdzz"><li>❤ Simple commands</li></a>
                <a href="#Commentz"><li>❤ Comments</li></a>
                <a href="#Vbalz"><li>❤ Variables</li></a>
                <a href="#Argz"><li>❤ Arguments</li></a>
                <a href="#Funcz"><li>❤ Functions</li></a>
                <a href="#Cstatez"><li>❤ Conditional statements</li></a>
                <a href="#Loopz"><li>❤ Loopy loops</li></a>
            </ul>
            <h3 id="ArgzPass">Passing arguments</h3>
            <p>When executing a command or a script one can give the command/script one or more presents</p>
            <p>in different forms and shapes.</p>
            <p>This is called passing arguments to the command/script.</p>
            <p>Arguments are passed in the following way &lt;some_command&gt; &lt;argument_1&gt; &lt;...&gt; &lt;argument_n&gt;</p>
            <p>As you can see you allready done this when you tested out the command cat &lt;some_file&gt;</p>
            <p>here &lt;some_file&gt; is an argument to cat</p>
            <h3 id="Exitscript">Exiting a script</h3>
            <p>To stop and exit a running command/script press crtl+c in your shell.</p>
            <p>Note this will kill your script and not in a nice way.</p>
            <h3 id="SimpleCmdzz">Simple commands</h3>
            <p>After the first row one can write any shell command one feels necessary e.g a small script might look as follow:</p>
            <Sheet>{`
#!/bin/sh
cat file_1.txt >> loggy.log
            `}</Sheet>
            <p>When someone runs this script the script will cat (print) what is in file_1.txt and</p>
            <p>append what is printed at the end of the file loggy.log</p>
            <p>So one can just keep adding lines with differnet commands to the script file and when the script is executed</p>
            <p>the commands will be executed in the order they are written</p>
            <h3 id ="Commentz">Comments</h3>
            <p>All lines beginning with a # (except the first one) is a comment and will not be executed.</p>
            <h3 id="Vbalz">Variables</h3>
            <p>One can create what is called variables, these kind little helpers is simply names that have a given value.</p>
            <p>E.g i want to use the value 0x420 many times but i do not want to write 0x420 all the time and</p>
            <p>0x420 is not self explainatory but if I create a variable with a explainatory name e.g as SMOKERSDAY=0x420</p>
            <p>one will directly know when you see $SMOKERSDAY that the value is 0x420.</p>
            <p>Note that when creating the variable no $ dollar bill yall is used. but when "calling" the variable</p>
            <p>It is full CREAM with $SMOKERSDAY in this way the shell can know if it is suppose to create or use a variable.</p>
            <h3 id="Argz">Arguments</h3>
            <p>In order to take care of any arguments in your script you can access them via the "variables" $0 ... $n</p>
            <p>Where $0 is a special one, this is the name of the command that is executed.</p>
            <p>$1 and so forth are the arguments in order given to the script at execution.</p>
            <h3 id="Funcz">Functions</h3>
            <p>Let us create som functions or commands within the script it self.</p>
            <p>To create a function you will have to write the following in your script file:</p>
            <Sheet>{`
some_function_name(){
    #function contet goes here
}
            `}</Sheet>
            <p>The above function just has a comment and does not for now do anything.</p>
            <p>To use this function in your script just call its name like so:</p>
            <Sheet>{`
some_function_name
            `}</Sheet>
            <p>to call it with arguments:</p>
            <Sheet>{`
some_function_name <arg1> <arg2> <...> <argN>
            `}</Sheet>
            <p>Note that function work just as a script within the script it self as mentioned above.</p>
            <p>That means that taking care of arguments work the same with full CREAM with $0 $1 and so forth</p>
            <p>creating and calling variables and calling other functions/commands e.g cat ls some_other_function_created</p>
            <p>Here is an example to gaze upon:</p>
            <Sheet>{`
#!/bin/sh
#Name of this script is test.sh
SMOKERSDAY=0x420
funny_func(){
    echo $1
}
call_on_me() {
    funny_func $1
}
call_on_me $SMOKERSDAY
            `}</Sheet>
            <p>What does ./test.sh do?</p>
            <p>Well it prints 0x420 in the shell it is executed in.</p>
            <h3 id="CStatez">Conditional statements</h3>
            <p>Lets lay down some conditions.</p>
            <p>What is a conditional statement?</p>
            <p>Well basically it is a question or a statement in the form of if.</p>
            <p>If this is true do this else if this is true do that else do what ever.</p>
            <p>For example:</p>
            <Sheet>{`
if [ 1 -gt 0 ]
then
   echo YES
fi
            `}</Sheet>
            <p>The above statement does the following:</p>
            <ol>
                <li>Checks if 1 is greater than (-gt) 0 then echo YES</li>
            </ol>
            <p>Another one:</p>
            <Sheet>{`
if [ $1 -gt 2 ]
then
   echo YES
else if [ $1 -le 4 ]
    echo "Oooh YEAS"
fi
            `}</Sheet>
            <p>The example above does the following:</p>
            <ol>
                <li>Checks if the first argument ($1) is greater than (-gt) 2 if it is then echo YES if not:</li>
                <li>Checks if the first argument ($1) is less than (-lt) 4 if it is then echo "Oooh YEAS" </li>
            </ol>
            <p>And in the spirit of DJ Khaled And another one:</p>
            <Sheet>{`
if [ $1 -gt 2 ]
then
    echo YES
else if [ $1 -le 4 ]
    echo "Oooh YEAS"
else
    echo "Hell YEAH!"
fi
            `}</Sheet>
             <p>The example above does the following:</p>
            <ol>
                <li>Checks if the first argument ($1) is greater than (-gt) 2 if it is then echo YES if not:</li>
                <li>Checks if the first argument ($1) is less than (-lt) 4 if it is then echo Oooh YEAS </li>
                <li>If non of the above echo Hell YEAH!</li>
            </ol>
            <h3 id="Loopz">Loopy loops</h3>
            <p>Lets gaze opon a special kind of conditional statement, that does the same thing a couple of times</p>
            <p>or for infinity.</p>
            <p>This is loops.</p>
            <p>An loop is exactly what its name implies.</p>
            <p>There are 2 kinds of loops one is called <b>for</b> and one is called <b>while</b>.</p>
            <p>The <b>for</b> loop is a special kind of while and can look like this:</p>
            <Sheet>{`
for i in 1 2 3 4 5
do
    echo "Looping ... number $i"
done
            `}</Sheet>
            <p><b>i</b> can be replaced with any name you like but <b>i,j,k</b> is the most commonly used.</p>
            <p><b>i</b> is called a loop index.</p>
            <p><b>1 2 3 4 5</b> can be replaced with any other compatible set.</p>
            <p>Beween <b>do</b> and <b>done</b> you specify what is to be done in a loop,</p>
            <p>in the example above just echo some text.</p>
            <p>Now lets look on <b>while</b> for a while...</p>
            <p>A while loop can look like this:</p>
            <Sheet>{`
INPUT_STRING=hello
while [ "$INPUT_STRING" != "bye" ]
do
    echo "Please type something in (bye to quit)"
    read INPUT_STRING
    echo "You typed: $INPUT_STRING"
done
            `}</Sheet>
            <p>Do not fear!</p>
            <p>I know it looks advanced and scary, but the main thing here is that the loop goes on until:</p>
            <p>The condition [ "$INPUT_STRING" != "bye" ] is true, e.i $INPUT_STRING is equal to bye then</p>
            <p>the loop quits looping.</p>
            <p>So [ "$INPUT_STRING" != "bye" ] can be switched out to any condition e.g [ 1 ] which will make</p>
            <p>the while loop go on for ever until crtl+c is pressed.</p>
            <h2 id="CheatSheets">Cheat sheets</h2>
            <Sheet>{`
cd <path>     change directory to <path>
cat <file>    print content of <file>
ls            show which files are in the current directory
>> <file>     append to
>  <file>     write to
            `}</Sheet>
            <p>
                Well thats all for now GLHF!
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </p>
            <StickyFooter>
                <a href="#WhatIShell"><b>What is shell?</b></a>
                <a href="#Bourne"><b>Bourne</b></a>
                <a href="#Putty"><b>Putty</b></a>
                <a href="#ShellCmd"><b>Shell commands</b></a>
                <a href="#Scriptz"><b>Scribes gonna script</b></a>
                <a href="#GSTH"><b>Good Stuff To Have (GSTH)</b></a>
                <a href="#CheatSheets"><b>Cheat sheets</b></a>
            </StickyFooter>
        </Content>
    )
}
