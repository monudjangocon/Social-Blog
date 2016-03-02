<?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="problem" id="user-forgottenpassword" xml:lang="en-CA">

  <info>
    <link type="guide" xref="user-accounts#passwords"/>
    <desc>Advanced techniques for resetting your password</desc>
    <revision version="12.10" date="2012-09-20" status="outdated"/>
    <credit type="author">
      <name>GNOME Documentation Project</name>
      <email>gnome-doc-list@gnome.org</email>
    </credit>

    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

  <title>I forgot my password!</title>

<comment><cite date="2011-06-07">mimico</cite><p>These instructions were written and tested using gnome3 from ppa.  I attempted following them on Fedora15 and locked the system out completely (had to reinstall os).  There is still hope, but getting this page accurate and safe (so users don't completely lock themselves out) will be very time consuming.  Perhaps distro specific pages are needed for this topic?</p></comment>

<comment><cite date="2011-04-03">shaunm</cite><p>Marking final for 3.0.
This could use some work for 3.2. There are some less drastic things.
Like if there's another admin user on your computer, have them reset
your password in the user accounts settings.</p>
<p>Also: merge two grubs instructions (almost equal), use clicky-clicky
instructions as much as possible, and let's get some real keyring docs
integrated in gnome-help then link there.</p>
</comment>
  <p>
     It is important to choose not only <link xref="user-goodpassword">a good
 and secure password</link>, but also one that you can remember. If you have
 forgotten the password to log in to your computer account, you can follow the
 following steps to reset it.
  </p>
  <note style="important">
  <p>
     If you have an encrypted home directory, you will not be able to reset a
 forgotten password.
  </p>
  </note>
  <p>
  If you simply want to change your password, see <link xref="user-changepassword"/>.
  </p>

  <links type="section"/>

  <section id="reset-password-grub2"><title>Reset password using Grub</title>
     <steps>
         <item>
           <p>
           Restart your computer, and hold down <key>Shift</key> during bootup
 to get into the Grub menu.
           </p>
           <note style="tip">
           <p>
           If you have a dual-boot machine and you choose at boot time which
 operating system to boot into, the Grub menu should appear without the need to
 hold down <key>Shift</key>.
           </p>
           </note>
           <note>
           <p>If you are unable to get into the Grub boot menu, and therefore cannot choose to boot into recovery mode, you can <link xref="user-forgottenpassword#live-cd">use a live CD to reset your user password</link>.
           </p>
           </note>
          </item>
          <item>
           <p>
           Press the down arrow on your keyboard to highlight the line that ends with the words 'recovery mode',
then press <key>Enter</key>.
           </p>
          </item>
          <item>
           <p>
           Your computer will now begin the boot process. After a few moments, a <gui>Recovery Menu</gui> will appear.
           Use your down arrow key to highlight <gui>root</gui> and press <key>Enter</key>.
           </p>
          </item>
          <item>
           <p>
           At the <cmd>#</cmd> symbol, type:
           </p>
           <p>
           <cmd>passwd <var>username</var></cmd>, where <var>username</var> is the username of the account you're changing the password for.
           </p>
          </item>
          <item>
           <p>
           You will be prompted to enter a new UNIX password, and to confirm the new password.
           </p>
          </item>
          <item>
           <p>
           Then type:
           </p>
           <p>
           # <cmd>reboot</cmd>
           </p>
          </item>
     </steps>
     <p>
       After you successfully log in, you will not be able to access your keyring
 (since you don't remember the old password).  This means that all your saved
 passwords for wireless networks, jabber accounts, etc. will no longer be
 accessible.  You will need to <link xref="#delete-keyring">delete the old
 keyring</link> and start a new one.
     </p>
  </section>
    <section id="live-cd"><title>Reset password using a Live CD or USB</title>
     <steps>
         <item>
           <p>
           Boot the Live CD or USB.
           </p>
          </item>
          <item>
           <p>
           Mount your drive.
           </p>
          </item>
          <item>
           <p>
           Press <keyseq><key>Alt</key><key>F2</key></keyseq> to get the <gui>Run
           Application</gui> window.
           </p>
          </item>
          <item>
           <p>
           Type <cmd>gksu nautilus</cmd> to launch the file manager with system-wide privileges.
           </p>
           <note style="tip">
           <!-- Translators: do not translate the word "home". -->
           <p>
             Within the drive you just mounted, you can check that it is the right
             drive by clicking <gui> home </gui> and then your username.
           </p>
           </note>
          </item>
          <item>
           <p>
           Go to the top-level directory of the mounted drive.  Then go into the <gui>etc</gui> directory.
           </p>
           <p>
           Locate the 'shadow' file and make a backup copy:
           </p>
           <steps>

           <item><p>
           Right-click on the shadow file and select <gui>copy</gui>.
           </p></item>
           <item><p>
            Then right-click in the empty space and select <gui>paste</gui>.
           </p></item>

           <item><p>
                      <link xref="files-rename">Rename</link> the backup "shadow.bak".
           </p></item>
           </steps>
          </item>


          <item>
           <p>
           Edit the original "shadow" file with a text editor.
           </p>
          </item>

          <item>
           <p>
           Find your username for which you have forgotten the password.  It
 should look something like this (the characters after the colon will be different):
           </p>
           <p>
           username:$1$2abCd0E or
           </p>
            <p>
           username:$1$2abCd0E:13721a:0:99999:7:::
           </p>
          </item>
          <item>
           <p>
         Delete the characters after the first colon and before the second
 colon. This will remove the password for the account.
           </p>
           <p>
           Save the file, exit out of everything and reboot your computer without
 the live CD or USB.
           </p>
          </item>
          <item>
           <p>
           When you boot back into your installation, click your name in the menu bar. Open <gui>My Account</gui> and reset your password.
           </p>
          </item>
          <item>
          <p>
            For <gui>Current password</gui> do not enter anything, as your
 current password is blank.  Just click <gui>Authenticate</gui> and enter a new
 password.
          </p>
          </item>

     </steps>
     <p>
       After you successfully log in, you will not be able to access your keyring
 (since you don't remember the old password).  This means that all your saved
 passwords for wireless networks, jabber accounts, etc. will no longer be
 accessible.  You will need to <link xref="#delete-keyring">delete the old
 keyring</link> and start a new one.
     </p>
  </section>


  <section id="delete-keyring">
    <title>Get rid of the keyring</title>

    <note style="warning"><p>This will delete all your saved passwords for wireless
    networks, instant messaging accounts, etc. Only do this if you can't remember
    the password you used for your keyring.</p></note>

  <steps>
   <item><p>
    Go to your Home folder by typing 'home' in the <gui>Dash</gui>.
   </p></item>
   <item><p>
    Press <keyseq><key>Ctrl</key><key>h</key></keyseq> (or click
 <guiseq><gui>View</gui><gui>Show Hidden Files</gui></guiseq>.)
   </p></item>
   <item><p>
    Double click on the folder <file>~/.local/share</file>.
   </p></item>
   <item><p>
   Double click on the folder called keyrings.
   </p></item>
   <item><p>
   Delete any files you find in the keyrings folder.
   </p></item>
   <item><p>
   Restart the computer.
   </p></item>
 </steps>
<p>
 After you restart and log in you will be asked to enter your wireless networks
 password.
</p>
  </section>

</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="tip" id="user-goodpassword" xml:lang="en-CA">

  <info>
    <link type="guide" xref="user-accounts#passwords"/>

    <desc>Use longer, more complicated passwords.</desc>
    <revision pkgversion="3.4.0" date="2012-02-19" status="review"/>
    <revision version="12.10" date="2012-09-20" status="final"/>
    <credit type="author">
      <name>GNOME Documentation Project</name>
      <email>gnome-doc-list@gnome.org</email>
    </credit>
    <credit type="author">
      <name>Phil Bull</name>
      <email>philbull@gmail.com</email>
    </credit>
    <credit type="author">
      <name>Tiffany Antopolski</name>
      <email>tiffany.antopolski@gmail.com</email>
    </credit>
    <credit type="editor">
      <name>Michael Hill</name>
      <email>mdhillca@gmail.com</email>
    </credit>

    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

<title>Choose a secure password</title>

<note style="important">
 <p>
 Make your passwords easy enough for you to remember, but very difficult for
 others (including computer programs) to guess.
 </p>
</note>
  <p>Choosing a good password will help to keep your computer safe. If your
 password is easy to guess, someone may figure it out and gain access to your
 personal information.</p>
  <p>People could even use computers to systematically try to guess your
 password, so even one that would be difficult for a human to guess might be
 extremely easy for a computer program to crack. Here are some tips for choosing
 a good password:</p>

<list>
 <item>
  <p>Use a mixture of upper-case and lower-case letters, numbers, symbols and
 spaces in the password.  This makes it more difficult to guess; there are more
 symbols to choose from, so more possible passwords that someone would have to
 check when trying to guess yours.</p>
  <note>
  <p>A good method for choosing a password is to take the first letter of each
 word in a phrase that you can remember.  The phrase could be the name of a
 movie, a book, a song or an album. For example, "Flatland: A Romance of Many
 Dimensions" would become F:ARoMD or faromd or f: aromd.</p>
</note>
 </item>
 <item>
  <p>Make your password as long as possible. The more characters it contains,
 the longer it should take for a person or computer to guess it.</p>
 </item>
 <item>
  <p>Do not use any words that appear in a standard dictionary in any language.
  Password crackers will try these first.   The most common password is
 "password" -- people can guess passwords like this very quickly!</p>
  </item>
  <item>
  <p>Do not use any personal information such as a date, license plate number,
 or any family member's name.</p>
  </item>
  <item>
  <p>Do not use any nouns. </p>
 </item>
 <item>
  <p>Choose a password that can be typed quickly, to decrease the chances of
 someone being able to make out what you have typed if they happen to be
 watching you.</p>
 <note style="tip">
  <p>Never write your passwords down anywhere.  They can be easily found!</p>
 </note>
 </item>
 <item>
  <p>Use different passwords for different things.</p>
 </item>

 <item>
  <p>Use different passwords for different accounts.</p>
  <p>If you use the same password for all of your accounts, anyone who guesses
 it will be able to access all of your accounts immediately.</p>
  <p>It can be difficult to remember lots of passwords, however. Though not as
 secure as using a different passwords for everything, it may be easier to use
 the same one for things that don't matter (like websites), and different ones
 for important things (like your online banking account and your email).</p>
 </item>

 <item>
  <p>
   Change your passwords regularly.
  </p>
 </item>
</list>

</page>
                                                                                                                                                                                                                                                                                                      <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="task" id="video-dvd-restricted" xml:lang="en-CA">

  <info>
    <link type="guide" xref="media#videos" group="#last"/>
    <link type="seealso" xref="video-dvd"/>
    
    <desc>Most commercial DVDs are encrypted and will not play without decryption software.</desc>
    
    <revision version="12.10" date="2012-09-20" status="outdated"/>
    <credit type="author">
      <name>Ubuntu Documentation Project</name>
      <email>ubuntu-doc@lists.ubuntu.com</email>
    </credit>
    
    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

<title>How do I enable restricted codecs to play DVDs?</title>

<p>DVD support cannot be provided by default in Ubuntu due to legal and technical restrictions. Most commercial DVDs are encrypted and so require the use of decryption software in order to play them. </p>

<section id="fluendo">
 <title>Use Fluendo to legally play DVDs</title>
 <p>You can buy a commercial DVD decoder that can handle copy protection from <link href="apt:fluendo-dvd">Fluendo</link>. It works with Linux and should be legal to use in all countries.</p>
</section>

<section id="restricted">
 <title>Use alternative decryption software</title>

 <note style="warning"><p>In some countries, the use of the below unlicensed decryption software is not permitted by law. Verify that you are within your rights to use it.</p></note>

 <steps>
  <item><p>Install <link href="apt:libdvdnav4">libdvdnav4</link>, <link href="apt:libdvdread4">libdvdread4</link>,
<link href="apt:gstreamer0.10-plugins-bad">gstreamer0.10-plugins-bad</link>, and <link href="apt:gstreamer0.10-plugins-ugly">gstreamer0.10-plugins-ugly</link>.</p></item>
  <item><p>If you would like to play encrypted DVDs (see the legal note above), open the Dash 
and launch a <app>Terminal</app>.</p></item>
  <item><p>Type the following into the screen which appears, then press <key>Enter</key>:</p>
  <p><code>sudo /usr/share/doc/libdvdread4/install-css.sh</code></p></item>
  <item><p>Enter your password to complete the installation.</p></item>

</steps>
</section>
</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="problem" id="video-dvd" xml:lang="en-CA">

  <info>
    <link type="guide" xref="media#videos"/>

    <desc>You might not have the right codecs installed, or the DVD might be the
 wrong region.</desc>

    <revision pkgversion="3.4.0" date="2012-02-19" status="outdated"/>
    <revision version="12.10" date="2012-09-20" status="final"/>    
    <credit type="author">
      <name>GNOME Documentation Project</name>
      <email>gnome-doc-list@gnome.org</email>
    </credit>

    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

<title>Why won't DVDs play?</title>

  <p>If you insert a DVD into your computer and it doesn't play, you may not
 have the right DVD <em>codecs</em> installed, or the DVD might be from a
 different <em>region</em>.</p>

<section id="codecs">
 <title>Installing the right codecs for DVD playback</title>
 <p>In order to play DVDs, you need to have the right <em>codecs</em> installed.
 A codec is a piece of software that allows applications to read a video or
 audio format. If you try to play a DVD and don't have the right codecs installed, the
Movie Player should tell you about this and offer to install them for you.</p>

  <p>DVDs are also <em>copy-protected</em> using a system called CSS. This
 prevents you from copying DVDs, but it also prevents you from playing them
 unless you have <link xref="video-dvd-restricted">extra software</link> to handle the copy protection.</p>
</section>

<section id="region">
 <title>Checking the DVD region</title>
  <p>DVDs have a <em>region code</em>, which tells you in which region of the
 world they are allowed to be played. If the region of your computer's DVD
 player doesn't match the region of the DVD you are trying to play, you won't be
 able to play the DVD. For example, if you have a Region 1 DVD player, you will
 only be allowed to play DVDs from North America.</p>

  <p>It is often possible to change the region used by your DVD player, but it
 can only be done a few times before it locks into one region permanently. To
 change the DVD region of your computer's DVD player, use
 <link href="apt:regionset">regionset</link>.</p>
</section>
	
</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="problem" id="video-sending" xml:lang="en-CA">

  <info>
    <link type="guide" xref="media#videos"/>
    <desc>Check that they have the right video codecs installed.</desc>
    <revision pkgversion="3.4.0" date="2012-02-19" status="outdated"/>
    <revision version="12.10" date="2012-09-20" status="final"/>
    <credit type="author">
      <name>GNOME Documentation Project</name>
      <email>gnome-doc-list@gnome.org</email>
    </credit>

    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

<title>Other people can't play the videos I made</title>

  <p>If you made a video on your Linux computer and sent it to someone using
 Windows or Mac OS, you may find that they have problems playing the video.</p>

  <p>To be able to play your video, the person you sent it to must have the
 right <em>codecs</em> installed. A codec is a little piece of software that
 knows how to take the video and display it on the screen. There are lots of
 different video formats and each requires a different codec to play it back.
 You can check which format your video is by doing:</p>
<list>
    <item><p>Open the <link xref="files-browse">file manager</link>.</p></item>
    <item><p>Right-click on video file and select <gui>Properties</gui>.</p></item>
    <item><p>Go to the <gui>Audio/Video</gui> tab and look at which
 <gui>codec</gui> is listed under <gui>Video</gui>.</p></item>
</list>

  <p>Ask the person having problems with playback if they have the right codec
 installed. They may find it helpful to search the web for the name of the codec
 plus the name of their video playback application. For example, if your video
 uses the <em>Theora</em> format and you have a friend using Windows Media
 Player to try and watch it, search for "theora windows media player". You will
 often be able to download the right codec for free if it's not installed.</p>

  <p>If you can't find the right codec, try the
 <link href="http://www.videolan.org/vlc/">VLC media player</link>. It works on
 Windows and Mac OS as well as Linux, and supports a lot of different video
 formats. Otherwise, try converting your video into a different format. Most
 video editors are able to do this, and specific video converter applications are
 available. Check the <app>Ubuntu Software Center</app> to see what's available.</p>

<note>
  <p>There are a few other problems which might prevent someone from playing
 your video. The video could have been damaged when you sent it to them
 (sometimes big files aren't copied across perfectly), they could have problems
 with their video playback application, or the video may not have been created
 properly (there could have been some errors when you saved the video).</p>
</note>
	
</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="task" id="wacom-left-handed" xml:lang="en-CA">
  <info>
    <revision pkgversion="3.5.5" version="0.1" date="2012-08-15" status="review"/>

    <link type="guide" xref="wacom"/>

    <credit type="author copyright">
      <name>Michael Hill</name>
      <email>mdhillca@gmail.com</email>
      <years>2012</years>
    </credit>

    <desc>Switch the Wacom tablet to <gui>Left-Handed Orientation.</gui></desc>
  </info>

  <title>Use the tablet left-handed</title>

  <p>Some tablets have hardware buttons on one side. The tablet can be rotated
   180 degrees to position these buttons for left-handed people. To switch the
   orientation to left-handed:</p>

<steps>
  <item><p>Click the icon at the far right of the <gui>menu bar</gui> and select
   <gui>System Settings</gui>.</p></item>
  <item><p>Open <gui>Wacom Graphics Tablet</gui>.</p>
     <note style="tip"><p>If no tablet is detected, you'll be asked to
      <gui>Please plug in or turn on your Wacom tablet</gui>.</p></note>
  </item>
  <item><p>Switch <gui>Left-Handed Orientation</gui> to <gui>ON</gui>.</p></item>
</steps>

</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="task" id="wacom-mode" xml:lang="en-CA">
  <info>
    <revision pkgversion="3.5.5" version="0.1" date="2012-08-15" status="draft"/>
    <revision version="12.10" date="2012-09-20" status="final"/>
    <link type="guide" xref="wacom"/>

    <credit type="author copyright">
      <name>Michael Hill</name>
      <email>mdhillca@gmail.com</email>
      <years>2012</years>
    </credit>

    <desc>Switch the tablet between tablet mode and mouse mode.</desc>
  </info>

  <title>Set the Wacom tablet's tracking mode</title>

<p><gui>Tracking Mode</gui> determines how the pointer is mapped to the screen.</p>

<steps>
  <item><p>Click the icon at the far right of the <gui>menu bar</gui> and select
   <gui>System Settings</gui>.</p></item>
  <item><p>Open <gui>Wacom Graphics Tablet</gui>.</p>
     <note style="tip"><p>If no tablet is detected, you'll be asked to
      <gui>Please plug in or turn on your Wacom tablet</gui>.</p></note>
  </item>
  <item><p>Next to <gui>Tracking Mode</gui>, select <gui>Tablet (absolute)</gui>
   or <gui>Touchpad (relative)</gui>.</p></item>
</steps>

<note style="info"><p>In <em>absolute</em> mode, each point on the tablet maps
 to a point on the screen. The top left corner of the screen, for instance,
 always corresponds to the same point on the tablet.</p>
 <p>In <em>relative</em> mode, if you lift the pointer off the tablet and put it
 down in a different position, the cursor on the screen doesn't move. This is
 the way a mouse operates, allowing you to cover distances on the screen with
 less hand movement.</p></note>

</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="task" id="wacom-multi-monitor" xml:lang="en-CA">
  <info>
    <revision pkgversion="3.5.5" version="0.1" date="2012-08-15" status="draft"/>

    <link type="guide" xref="wacom"/>

    <credit type="author copyright">
      <name>Michael Hill</name>
      <email>mdhillca@gmail.com</email>
      <years>2012</years>
    </credit>

    <desc>Map the Wacom tablet to a specific monitor.</desc>
  </info>

  <title>Choose a monitor</title>

  <comment>
    <cite date="2012.10-21" href="mailto:mdhillca@gmail.com">Michael Hill</cite>
    <p>In a multi-monitor setup, the user is able to select which monitor is
     mapped by the graphics tablet.</p>
  </comment>

<steps>
  <item><p>Click the icon at the far right of the <gui>menu bar</gui> and select
   <gui>System Settings</gui>.</p></item>
  <item><p>Open <gui>Wacom Graphics Tablet</gui>.</p>
     <note style="tip"><p>If no tablet is detected, you'll be asked to
      <gui>Please plug in or turn on your Wacom tablet</gui>.</p></note>
  </item>
  <item><p>Click <gui>Map to Monitor…</gui></p></item>
  <item><p>Check <gui>Map to single monitor</gui>.</p></item>
  <item><p>Next to <gui>Output</gui>, select the monitor you wish to receive
   input from your graphics tablet.</p>
     <note style="tip"><p>Only the monitors that are configured will be
      selectable.</p></note>
  </item>
  <item><p>Click <gui>Close</gui>.</p></item>
</steps>

</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="task" id="wacom-stylus" xml:lang="en-CA">
  <info>
    <revision pkgversion="3.5.5" version="0.1" date="2012-08-15" status="review"/>

    <link type="guide" xref="wacom"/>

    <credit type="author copyright">
      <name>Michael Hill</name>
      <email>mdhillca@gmail.com</email>
      <years>2012</years>
    </credit>

    <desc>Define the button functions and pressure feel of the Wacom stylus.</desc>
  </info>

  <title>Configure the stylus</title>

  <comment>
    <cite date="2012.10-21" href="mailto:mdhillca@gmail.com">Michael Hill</cite>
    <p>Describe the config options for the stylus and how to configure more than
     one stylus.</p>
  </comment>

<steps>
  <item><p>Click the icon at the far right of the <gui>menu bar</gui> and select
   <gui>System Settings</gui>.</p></item>
  <item><p>Open <gui>Wacom Graphics Tablet</gui>.</p>
     <note style="tip"><p>If no tablet is detected, you'll be asked to
      <gui>Please plug in or turn on your Wacom tablet</gui>.</p></note>
  </item>
  <item><p>The lower part of the panel contains details and settings specific
   to your stylus, with the device name (the stylus class) and diagram to the
   left. These settings can be adjusted:</p>
    <list>
      <item><p><gui>Eraser Pressure Feel:</gui> use the slider to adjust the
       "feel" (how physical pressure is translated to digital values) between
       <gui>Soft</gui> and <gui>Firm</gui>.</p></item>
      <item><p><gui>Button/Scroll Wheel</gui> configuration (these change to
       reflect the stylus). Click the menu next to each label to select one of
       these functions: No Action, Left Mouse Button Click, Middle Mouse Button
       Click, Right Mouse Button Click, Scroll Up, Scroll Down, Scroll Left,
       Scroll Right, Back, Forward.</p></item>
      <item><p><gui>Tip Pressure Feel:</gui> use the slider to adjust the
       "feel" between <gui>Soft</gui> and <gui>Firm</gui>.</p></item>
    </list>
  </item>
</steps>

<note style="info"><p>If you have more than one stylus, when the additional
 stylus gets close to the tablet, a pager will be displayed next to the stylus
 device name. Use the pager to choose which stylus to configured.</p>
</note>

</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="guide" style="task" id="wacom" xml:lang="en-CA">

<info>
  <desc>Adjust the settings of your Wacom tablet.</desc>

  <link type="guide" xref="prefs"/>

  <revision pkgversion="3.5.5" version="0.1" date="2012-08-14" status="review"/>
  <revision version="12.10" date="2012-09-20" status="final"/>
  <credit type="author">
    <name>Michael Hill</name>
    <email>mdhillca@gmail.com</email>
  </credit>
</info>

<title>Wacom Graphics Tablet</title>

</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="task" id="whats-new" xml:lang="en-CA">

  <info>
    <link type="guide" xref="index" group="unity-introduction"/>
    <link type="guide" xref="shell-overview" group="#first"/>

    <desc>Improvements in the latest version of Ubuntu.</desc>

    <revision version="13.10" date="2013-09-12" status="outdated"/>
    <credit type="author">
      <name>Jeremy Bicha</name>
      <email>jbicha@ubuntu.com</email>
    </credit>

    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

  <title>What's new in Ubuntu 13.10?</title>

<p>Ubuntu 13.10 continues the evolution of the <em>Unity</em> interface. Here are
 highlights of what you can do with the latest version of Ubuntu:</p>

<section id="new-features">
  <title>New and improved features</title>

<list>

  <item><p>Search literally hundreds of different online sources directly
           from the <gui>Dash</gui>.</p></item>

  <item><p>Choose to filter <gui>Dash</gui> results in several different ways.</p></item>

  <item><p>Add or remove scopes from the <gui>Dash</gui> to customize your
           experience.</p></item>

  <item><p>Browse messages from your social networks with the new
    <link xref="unity-dash-friends">Friends scope</link>.</p></item>

  <item><p>Get work done in style with LibreOffice 4.0, now with new, modern presentation
    templates and built-in support for Ubuntu's integrated <link xref="unity-menubar-intro#app-menus">menu bar</link>.</p></item>

</list>
</section>
</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <?xml version="1.0" encoding="utf-8"?>
<page xmlns="http://projectmallard.org/1.0/" type="topic" style="question" id="windows-key" xml:lang="en-CA">

  <info>
    <desc>The Super key provides access to the Dash and the Launcher.  You can usually find it
    next to the <key>Alt</key> key on your keyboard.</desc>
    <revision pkgversion="3.7.1" version="0.2" date="2012-11-16" status="outdated"/>
    <revision version="12.10" date="2012-09-20" status="outdated"/>
    <credit type="author">
      <name>GNOME Documentation Project</name>
      <email>gnome-doc-list@gnome.org</email>
    </credit>

    <include xmlns="http://www.w3.org/2001/XInclude" href="legal.xml"/>
  </info>

<title>What is the "Super" key?</title>

  <p>This key can usually be found on the bottom-left of your keyboard,
 next to the <key>Alt</key> key, and usually has a window/squares icon on it. It
 is sometimes called the Windows key, logo key, or system key.</p>

<note>
  <p>If you have an Apple keyboard, there will not be a Windows key on your
 keyboard. The <key>⌘</key> (Command) key can be used instead.</p>
</note>

  <p>The Super key serves a special function in <em>Unity</em>. If you press the Super key,
  the Dash is displayed. If you press <em>and hold</em> the Super key, an overlay showing
  many of Unity's keyboard shortcuts appears until you release the Super key.</p>

<p>The Super key can help you do even more than that, though. To learn about more uses for the <em>Super</em> key, see the <link xref="shell-keyboard-shortcuts">keyboard shortcuts</link> page.</p>

<comment>
  <p>Need to add info on changing the keybinding using the new preferences
 windows.</p>
</comment>

<!--
<p>To change which key is used to display the activities overview:</p>

  <steps>
    <item>
      <p>Click your name on the top bar and select <gui>System Settings</gui>.</p>
    </item>
    <item>
      <p>Click <gui>Keyboard</gui>.</p>
    </item>
    <item>
      <p>Click the <gui>Shortcuts</gui> tab.</p>
    </item>
    <item>
      <p>Select <gui>System</gui> on the left side of the window, and
      <gui>Show the activities overview</gui> on the right.</p>
    </item>
    <item>
      <p>Click the current shortcut definition on the far right.</p>
    </item>
    <item>
      <p>Hold down the desired key combination.</p>
    </item>
  </steps>
-->


</page>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE refentry PUBLIC "-//OASIS//DTD DocBook XML V4.3//EN" "http://www.oasis-open.org/docbook/xml/4.3/docbookx.dtd">
<sect1 id="Accordion"><!--<sect1info>
		<copyright>
			<year>2008</year>
			<holder>Ed Sirett</holder>
		</copyright>
		<author>
			<firstname>Ed</firstname>
			<surname>Sirett</surname>
		</author>
		<address><email>ed @makewrite.demon.co.uk</email></address>
	</sect1info>-->

	<title>Accordion</title>

  <para>Written by Ed Sirett</para>

          <sect2><title>Setup</title>


	<informaltable>
		<tgroup cols="2">
			<tbody>
	<row>
		<entry>Type of Deck</entry>
		<entry>Standard Deck</entry>
	</row>

	<row>
		<entry>Tableau</entry>
		<entry>Fifty-four spaces in five rows of nine and a last row of seven. Deal cards face up one per space. The spaces should be considered as one continuous line, the rows simply arrange the tableau so all of it can be seen at once. Thus the rightmost space of a row is to be considered to the left of the leftmost space of the row below.</entry>
	</row>
			</tbody>
		</tgroup>
	</informaltable>

          </sect2>
        <sect2><title>Goal</title>

  <para>To remove all cards except one.</para>

          </sect2>
        <sect2><title>Rules</title>

  <para>Cards are moved singly. Any card can be moved over another card of the same suit or rank that is in the space immediately to its left or three spaces to its left. The card that is covered is removed from play. All the cards (if any) in spaces to the right of the resulting gap are moved to the left one space so as to close the gap. Double-clicking causes the card to move three spaces, if possible, or failing that one space to the left.</para>

          </sect2>
        <sect2><title>Scoring</title>

  <para>Each card removed scores 1 point.</para>
  <para>Maximum possible score: 51</para>

          </sect2>
        <sect2><title>Strategy</title>

  <para>This is a diffcult game. Try to find two or three cards of the same rank at or near the last row. Try not to remove any card of this rank. At the end you can move these cards onto each other to win.</para>
        </sect2>
</sect1>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE refentry PUBLIC "-//OASIS//DTD DocBook XML V4.3//EN" "http://www.oasis-open.org/docbook/xml/4.3/docbookx.dtd">
<sect1 id="Agnes"><!--<sect1info>
  	<copyright>
  	 <year>2001</year>
  	 <holder>Rosanna Yuen</holder>
  	</copyright>
  	<author>
  	 <firstname>Rosanna</firstname>
  	 <surname>Yuen</surname>
  	</author>
  	<address><email>zana@webwynk.net</email></address>
	</sect1info>-->

	<title>Agnes</title>

  <para>Written by Rosanna Yuen</para>

  <sect2><title>Setup</title>

  <informaltable>
    <tgroup cols="2">
      <tbody>
	<row>
	  <entry>Type of Deck</entry>
	  <entry>Standard Deck</entry>
	</row>
	<row>
	  <entry>Stock</entry>
	  <entry>Top left pile. The rest of the deck is placed here after dealing the Tableau. Cards are dealt in batches of seven, one on every Tableau pile.</entry>
	</row>
	<row>
	  <entry>Foundation</entry>
	  <entry>Four piles top right. To be built in suit and sequence, wrapping from King to Ace when necessary. One card is dealt on to the first Foundation pile. The other Foundation piles must be started with cards of the same rank.</entry>
	</row>
	<row>
	  <entry>Tableau</entry>
    <entry>Seven piles. Deal card face up in first pile. Place one card face down on all other piles. Place one card face up on next pile followed by one card face down on all the covered piles. Repeat until there are seven cards in last pile. Tableau can be built down in same colours. Groups of cards can be moved. Empty piles can only be filled by the next deal from the Stock.</entry>
	</row>
      </tbody>
    </tgroup>
  </informaltable>
  </sect2>

  <sect2><title>Goal</title>
  <para>Move all cards to the Foundation piles.</para>
  </sect2>
  <sect2><title>Rules</title>
  <para>Cards in the Tableau are built down by same colour. Groups of cards in sequence and same colour can be moved as a unit.</para>
  <para>Each deal flips one card from the Stock to each pile of the Tableau. There are no redeals.</para>
  <para>Foundations are built up in suit in sequence, wrapping from King to Ace when necessary. Cards in Foundations are still in play. Double-clicking on a card in the Tableau will move it to the appropriate Foundation pile if such a move is possible.</para>
</sect2>
  <sect2><title>Scoring</title>
  <para>Each card in Foundation scores one point.</para>
  <para>Maximum possible score: 52</para>
</sect2>

  <sect2><title>Strategy</title>
  <para>Try to build down in suit whenever possible. Try to score as many points as you can as this game is very hard to win.</para>
</sect2>
</sect1>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE refentry PUBLIC "-//OASIS//DTD DocBook XML V4.3//EN" "http://www.oasis-open.org/docbook/xml/4.3/docbookx.dtd">
<sect1 id="Athena">
<!--<sect1info>
    <copyright>
      <year>2001</year>
      <holder>Rosanna Yuen</holder>
    </copyright>
    <author>
      <firstname>Rosanna</firstname>
      <surname>Yuen</surname>
    </author>
    <address><email>zana@webwynk.net</email></address>
  </sect1info>-->

  <title>Athena</title>

  <para>Written by Alan Horkan, based on work by Jonathan Blandford</para>
  <!-- Also documented by Alan Horkan (2005)
  based on documentation by Rosann Yuen -->
  <sect2><title>Setup</title>

  <informaltable>
    <tgroup cols="2"><tbody>
	<row>
	  <entry>Type of Deck</entry>
	  <entry>Standard Deck</entry>
	</row>
	<row>
	  <entry>Stock</entry>
	  <entry>Top left pile. The rest of the deck is placed here after dealing on to the Tableau. Cards are turned over one at a time to Waste. Two redeals.</entry>
	</row>
	<row>
	  <entry>Waste</entry>
	  <entry>To be taken from Stock. Top card available for play.</entry>
	</row>
	<row>
	  <entry>Foundations</entry>
	  <entry>Four piles top right. To be built up in suit from Ace to King. Topmost card in each Foundation can be played back on to the Tableau.</entry>
	</row>
	<row>
	  <entry>Tableau</entry>
	  <entry>Seven piles. Four rows, the first row is face down, the second row is face up, the third row is face down and the fourth and final row is face up. Essentially Athena is the same as Canfield only the opening layout is different. Tableau can be built down in alternating colours. Builds of cards can be moved. Empty piles can only be filled by Kings or group of cards starting with a King.</entry>
	</row>
      </tbody>
    </tgroup>
  </informaltable>
  </sect2>
  <sect2><title>Goal</title>
  <para>Move all cards to the Foundation piles.</para>
  </sect2>
  <sect2><title>Rules</title>
  <para>Cards in the Tableau are built down by alternating colour. Builds of cards can be moved. An empty pile in the Tableau can be filled with a King or a group of cards with a King on the bottom.</para>
  <para>Cards are flipped from the Stock to the Waste individually. Top card in Waste is in play. When Stock is empty, move all cards in Waste back to the Stock, maintaining order. You can go through the deck three times.</para>
  <para>Foundations are built up in suit from Ace to King. Cards in Foundations are still in play. Double-clicking on a card will move it to the appropriate Foundation pile if such a move is possible.</para>

<!-- TODO 
  <sect2><title>Options</title>
  <para>
    Three card deals: If checked, the Stock will deal three each time.
    Otherwise, the Stock will deal singly into the Waste.
  </para>
  <para>
    King Only: If checked empty space may be filled with Kings or 
    groups of cards starting with a King only.  
  </para>
-->
  </sect2>
  <sect2><title>Scoring</title>
  <para>Each card in the Foundation piles scores one point.</para>
  <para>Maximum possible score: 52</para>
  </sect2>
  <sect2><title>Strategy</title>
  <para>Don't give up the ship! Try brute force methods when the game seems over. Sometimes a combination of using cards already in the Foundation and rearranging sequences will free up some needed cards.</para>
  </sect2>
</sect1>
                                                                             