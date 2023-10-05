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
    // 2022-2023 Officers 
    //----------------------------------------------------------------------------------------------------------------

    // Will Hoffer
    document.getElementById("hoffer-email").innerHTML="<n uers=\"znvygb:jubss003@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Jvyy</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    //document.body.appendChild(eo);

    // Chris Grossack
    document.getElementById("grossack-email").innerHTML="<n uers=\"znvygb:ptebf007@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Puevf</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    //document.body.appendChild(eo);

    // Jennifer Wang
    document.getElementById("wang-email").innerHTML="<n uers=\"znvygb:wjnat293@hpe.rqh\" gnetrg=\"_oynax\">Rznvy Wraavsre</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});    
    //document.body.appendChild(eo);

    // Rahul Rajkumar
    document.getElementById("rajkumar-email").innerHTML="<n uers=\"znvygb:enuhy.enwxhzne@rznvy.hpe.rqh\" gnetrg=\"_oynax\">Rznvy Enuhy</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});    
    //document.body.appendChild(eo);
};


