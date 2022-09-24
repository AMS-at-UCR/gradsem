/*
 *  USE THIS WEBSITE TO GENERATE THE JAVASCRIPT FOR A OBFUSCATED EMAIL: 
 *
 *     http://rot13.florianbersier.com/
 *
 *  THESE SCRIPTS MAKE IT SO A PERSON VIEWING THE WEBPAGE 
 *  HAS TO HAVE JAVASCRIPT ENABLED TO SEE THE ORGANIZERS' EMAILS.
 *  IF ANY FUTURE MAINTAINER OF THIS SITE WANTS TO CHANGE THIS, 
 *  I MEAN WANTS TO ALLOW FOLKS WITHOUT JAVASCRIPT ENABLED TO VIEW EMAIL ADDRESSES,
 *  JUST REPLACE THE LINES IN THE HTML
 *  
 *      <span id="pierce-email"></span>
 *      <noscript>(enable JavaScript to view email address)</noscript>
 *  
 *  WITH THE BLOCK
 *  
 *      <noscript>
 *          <span style="unicode-bidi:bidi-override;direction:rtl;">
 *              ude.rcu.htam@ecreipm
 *          </span>
 *      </noscript>
 *  
 *  WHERE, YOU'LL NOTICE THAT BLOCK CONTAINS THE ORGANIZER'S EMAIL SPELLED BACKWARDS.
 */

window.onload = function () {
    //----------------------------------------------------------------------------------------------------------------
    // 2021-2022 Officers // N.B: When creating new officers, comment the old ones to make the display work
    //----------------------------------------------------------------------------------------------------------------

    // Will Hoffer
    document.getElementById("hoffer-email").innerHTML="<n uers=\"znvygb:jubss003@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Jvyy</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    //document.body.appendChild(eo);

    // Jacob Garcia
    document.getElementById("garcia-email").innerHTML="<n uers=\"znvygb:wtnep351@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Wnpbo</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    //document.body.appendChild(eo);

    // Bill Terry
    document.getElementById("terry-email").innerHTML="<n uers=\"znvygb:ngbbz001@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Nylfun</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    //document.body.appendChild(eo);

    // Rahul Rajkumar
    document.getElementById("rajkumar-email").innerHTML="<n uers=\"znvygb:ezngf014@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Enlzbaq</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    //document.body.appendChild(eo);
};

