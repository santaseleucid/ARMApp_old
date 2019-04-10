/**
 * Express route for Google OAuth
 */

//passport handles google OAuth 
const passport = require('passport')

//app is an express object. It is passed here from index.js
module.exports = (app) =>{

//log in via google 
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope:['profile', 'email']
        })
    );

//google knows to kick user back to /callback. this is the response route
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/'); 
        }); 

//logout user
    app.get('/api/logout', (req,res) => {
        req.logout(); 
        res.redirect('/');
    });

//current user
    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);
    });

//test endpoint for Boston Green Line B 

app.get('/api/coord', (req, res) => {
    console.log("getting data..."); 
    return res.send(
      //API format
[
      {id: 0, chain: 1, infoVisible: false, draw:{coord:[ 
        {lat: 42.34898399999347, lng: -71.09562700000589}, 
        {lat: 42.34898842260059, lng: -71.0959962400249}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 1, chain: 2, infoVisible: false, draw:{coord:[ 
        {lat: 42.34898842260059, lng: -71.0959962400249}, 
        {lat: 42.34899284401662, lng: -71.09636548004802}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 2, chain: 3, infoVisible: false, draw:{coord:[ 
        {lat: 42.34899284401662, lng: -71.09636548004802}, 
        {lat: 42.34899726424159, lng: -71.09673472007522}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 3, chain: 4, infoVisible: false, draw:{coord:[ 
        {lat: 42.34899726424159, lng: -71.09673472007522}, 
        {lat: 42.34900168327549, lng: -71.09710396010645}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 4, chain: 5, infoVisible: false, draw:{coord:[ 
        {lat: 42.34900168327549, lng: -71.09710396010645}, 
        {lat: 42.34900299999344, lng: -71.09721400000592}, 
        {lat: 42.349025498715065, lng: -71.09747145339159}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 5, chain: 6, infoVisible: false, draw:{coord:[ 
        {lat: 42.349025498715065, lng: -71.09747145339159}, 
        {lat: 42.34905754795745, lng: -71.09783820539607}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 6, chain: 7, infoVisible: false, draw:{coord:[ 
        {lat: 42.34905754795745, lng: -71.09783820539607}, 
        {lat: 42.34908959601748, lng: -71.09820495772696}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 7, chain: 8, infoVisible: false, draw:{coord:[ 
        {lat: 42.34908959601748, lng: -71.09820495772696}, 
        {lat: 42.34912164289516, lng: -71.09857171038426}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 8, chain: 9, infoVisible: false, draw:{coord:[ 
        {lat: 42.34912164289516, lng: -71.09857171038426}, 
        {lat: 42.34915368859049, lng: -71.09893846336794}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 9, chain: 10, infoVisible: false, draw:{coord:[ 
        {lat: 42.34915368859049, lng: -71.09893846336794}, 
        {lat: 42.34918573310346, lng: -71.09930521667799}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 10, chain: 11, infoVisible: false, draw:{coord:[ 
        {lat: 42.34918573310346, lng: -71.09930521667799}, 
        {lat: 42.349217776434074, lng: -71.09967197031436}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 11, chain: 12, infoVisible: false, draw:{coord:[ 
        {lat: 42.349217776434074, lng: -71.09967197031436}, 
        {lat: 42.349249818582315, lng: -71.10003872427704}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 12, chain: 13, infoVisible: false, draw:{coord:[ 
        {lat: 42.349249818582315, lng: -71.10003872427704}, 
        {lat: 42.34928185954819, lng: -71.10040547856603}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 13, chain: 14, infoVisible: false, draw:{coord:[ 
        {lat: 42.34928185954819, lng: -71.10040547856603}, 
        {lat: 42.349292999993374, lng: -71.10053300000597}, 
        {lat: 42.34932063512078, lng: -71.1007709881699}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 14, chain: 15, infoVisible: false, draw:{coord:[ 
        {lat: 42.34932063512078, lng: -71.1007709881699}, 
        {lat: 42.34936299998198, lng: -71.10113583455376}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 15, chain: 16, infoVisible: false, draw:{coord:[ 
        {lat: 42.34936299998198, lng: -71.10113583455376}, 
        {lat: 42.34940536367026, lng: -71.10150068138239}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 16, chain: 17, infoVisible: false, draw:{coord:[ 
        {lat: 42.34940536367026, lng: -71.10150068138239}, 
        {lat: 42.349447726185616, lng: -71.10186552865582}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 17, chain: 18, infoVisible: false, draw:{coord:[ 
        {lat: 42.349447726185616, lng: -71.10186552865582}, 
        {lat: 42.349490087528046, lng: -71.102230376374}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 18, chain: 19, infoVisible: false, draw:{coord:[ 
        {lat: 42.349490087528046, lng: -71.102230376374}, 
        {lat: 42.34953244769754, lng: -71.1025952245369}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 19, chain: 20, infoVisible: false, draw:{coord:[ 
        {lat: 42.34953244769754, lng: -71.1025952245369}, 
        {lat: 42.3495748066941, lng: -71.10296007314453}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 20, chain: 21, infoVisible: false, draw:{coord:[ 
        {lat: 42.3495748066941, lng: -71.10296007314453}, 
        {lat: 42.3496171645177, lng: -71.10332492219683}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 21, chain: 22, infoVisible: false, draw:{coord:[ 
        {lat: 42.3496171645177, lng: -71.10332492219683}, 
        {lat: 42.34965952116836, lng: -71.10368977169382}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 22, chain: 23, infoVisible: false, draw:{coord:[ 
        {lat: 42.34965952116836, lng: -71.10368977169382}, 
        {lat: 42.34970187664607, lng: -71.10405462163546}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 23, chain: 24, infoVisible: false, draw:{coord:[ 
        {lat: 42.34970187664607, lng: -71.10405462163546}, 
        {lat: 42.34974423095082, lng: -71.10441947202172}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 24, chain: 25, infoVisible: false, draw:{coord:[ 
        {lat: 42.34974423095082, lng: -71.10441947202172}, 
        {lat: 42.34976599999331, lng: -71.10460700000603}, 
        {lat: 42.34978831012111, lng: -71.10478394302844}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 25, chain: 26, infoVisible: false, draw:{coord:[ 
        {lat: 42.34978831012111, lng: -71.10478394302844}, 
        {lat: 42.34983421349661, lng: -71.10514801282599}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 26, chain: 27, infoVisible: false, draw:{coord:[ 
        {lat: 42.34983421349661, lng: -71.10514801282599}, 
        {lat: 42.34988011570315, lng: -71.10551208310848}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 27, chain: 28, infoVisible: false, draw:{coord:[ 
        {lat: 42.34988011570315, lng: -71.10551208310848}, 
        {lat: 42.34992601674074, lng: -71.1058761538759}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 28, chain: 29, infoVisible: false, draw:{coord:[ 
        {lat: 42.34992601674074, lng: -71.1058761538759}, 
        {lat: 42.34997191660939, lng: -71.10624022512823}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 29, chain: 30, infoVisible: false, draw:{coord:[ 
        {lat: 42.34997191660939, lng: -71.10624022512823}, 
        {lat: 42.35001781530909, lng: -71.10660429686543}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 30, chain: 31, infoVisible: false, draw:{coord:[ 
        {lat: 42.35001781530909, lng: -71.10660429686543}, 
        {lat: 42.350043999993254, lng: -71.10681200000607}, 
        {lat: 42.3500624989599, lng: -71.106968638418}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 31, chain: 32, infoVisible: false, draw:{coord:[ 
        {lat: 42.3500624989599, lng: -71.106968638418}, 
        {lat: 42.350105569056474, lng: -71.10733333818108}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 32, chain: 33, infoVisible: false, draw:{coord:[ 
        {lat: 42.350105569056474, lng: -71.10733333818108}, 
        {lat: 42.350148637980816, lng: -71.10769803839689}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 33, chain: 34, infoVisible: false, draw:{coord:[ 
        {lat: 42.350148637980816, lng: -71.10769803839689}, 
        {lat: 42.35019170573297, lng: -71.10806273906539}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 34, chain: 35, infoVisible: false, draw:{coord:[ 
        {lat: 42.35019170573297, lng: -71.10806273906539}, 
        {lat: 42.3502347723129, lng: -71.10842744018657}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 35, chain: 36, infoVisible: false, draw:{coord:[ 
        {lat: 42.3502347723129, lng: -71.10842744018657}, 
        {lat: 42.35027783772058, lng: -71.10879214176039}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 36, chain: 37, infoVisible: false, draw:{coord:[ 
        {lat: 42.35027783772058, lng: -71.10879214176039}, 
        {lat: 42.35032090195604, lng: -71.10915684378685}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 37, chain: 38, infoVisible: false, draw:{coord:[ 
        {lat: 42.35032090195604, lng: -71.10915684378685}, 
        {lat: 42.350363965019284, lng: -71.10952154626592}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 38, chain: 39, infoVisible: false, draw:{coord:[ 
        {lat: 42.350363965019284, lng: -71.10952154626592}, 
        {lat: 42.35040702691027, lng: -71.10988624919761}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 39, chain: 40, infoVisible: false, draw:{coord:[ 
        {lat: 42.35040702691027, lng: -71.10988624919761}, 
        {lat: 42.350450087628985, lng: -71.11025095258185}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 40, chain: 41, infoVisible: false, draw:{coord:[ 
        {lat: 42.350450087628985, lng: -71.11025095258185}, 
        {lat: 42.35049314717547, lng: -71.11061565641864}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 41, chain: 42, infoVisible: false, draw:{coord:[ 
        {lat: 42.35049314717547, lng: -71.11061565641864}, 
        {lat: 42.35053620554971, lng: -71.11098036070797}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 42, chain: 43, infoVisible: false, draw:{coord:[ 
        {lat: 42.35053620554971, lng: -71.11098036070797}, 
        {lat: 42.35057926275167, lng: -71.11134506544983}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 43, chain: 44, infoVisible: false, draw:{coord:[ 
        {lat: 42.35057926275167, lng: -71.11134506544983}, 
        {lat: 42.35062231878137, lng: -71.11170977064415}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 44, chain: 45, infoVisible: false, draw:{coord:[ 
        {lat: 42.35062231878137, lng: -71.11170977064415}, 
        {lat: 42.35066537363881, lng: -71.11207447629097}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 45, chain: 46, infoVisible: false, draw:{coord:[ 
        {lat: 42.35066537363881, lng: -71.11207447629097}, 
        {lat: 42.35070842732397, lng: -71.11243918239023}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 46, chain: 47, infoVisible: false, draw:{coord:[ 
        {lat: 42.35070842732397, lng: -71.11243918239023}, 
        {lat: 42.35075147983684, lng: -71.11280388894191}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 47, chain: 48, infoVisible: false, draw:{coord:[ 
        {lat: 42.35075147983684, lng: -71.11280388894191}, 
        {lat: 42.35079453117743, lng: -71.11316859594604}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 48, chain: 49, infoVisible: false, draw:{coord:[ 
        {lat: 42.35079453117743, lng: -71.11316859594604}, 
        {lat: 42.350814999993126, lng: -71.11334200000616}, 
        {lat: 42.350839387298514, lng: -71.11353290003858}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 49, chain: 50, infoVisible: false, draw:{coord:[ 
        {lat: 42.350839387298514, lng: -71.11353290003858}, 
        {lat: 42.35088587922985, lng: -71.11389683898993}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 50, chain: 51, infoVisible: false, draw:{coord:[ 
        {lat: 42.35088587922985, lng: -71.11389683898993}, 
        {lat: 42.350932369992854, lng: -71.11426077843274}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 51, chain: 52, infoVisible: false, draw:{coord:[ 
        {lat: 42.350932369992854, lng: -71.11426077843274}, 
        {lat: 42.35097885958754, lng: -71.11462471836698}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 52, chain: 53, infoVisible: false, draw:{coord:[ 
        {lat: 42.35097885958754, lng: -71.11462471836698}, 
        {lat: 42.35102534801389, lng: -71.11498865879263}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 53, chain: 54, infoVisible: false, draw:{coord:[ 
        {lat: 42.35102534801389, lng: -71.11498865879263}, 
        {lat: 42.3510718352719, lng: -71.11535259970965}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 54, chain: 55, infoVisible: false, draw:{coord:[ 
        {lat: 42.3510718352719, lng: -71.11535259970965}, 
        {lat: 42.351118321361575, lng: -71.11571654111808}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 55, chain: 56, infoVisible: false, draw:{coord:[ 
        {lat: 42.351118321361575, lng: -71.11571654111808}, 
        {lat: 42.351123999993085, lng: -71.1157610000062}, 
        {lat: 42.35116705068229, lng: -71.11607994721402}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 56, chain: 57, infoVisible: false, draw:{coord:[ 
        {lat: 42.35116705068229, lng: -71.11607994721402}, 
        {lat: 42.35121609116594, lng: -71.11644327926652}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 57, chain: 58, infoVisible: false, draw:{coord:[ 
        {lat: 42.35121609116594, lng: -71.11644327926652}, 
        {lat: 42.35126513048441, lng: -71.11680661183922}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 58, chain: 59, infoVisible: false, draw:{coord:[ 
        {lat: 42.35126513048441, lng: -71.11680661183922}, 
        {lat: 42.35131416863773, lng: -71.11716994493212}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 59, chain: 60, infoVisible: false, draw:{coord:[ 
        {lat: 42.35131416863773, lng: -71.11716994493212}, 
        {lat: 42.35136320562585, lng: -71.11753327854515}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 60, chain: 61, infoVisible: false, draw:{coord:[ 
        {lat: 42.35136320562585, lng: -71.11753327854515}, 
        {lat: 42.35141224144882, lng: -71.11789661267834}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 61, chain: 62, infoVisible: false, draw:{coord:[ 
        {lat: 42.35141224144882, lng: -71.11789661267834}, 
        {lat: 42.3514612761066, lng: -71.11825994733164}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 62, chain: 63, infoVisible: false, draw:{coord:[ 
        {lat: 42.3514612761066, lng: -71.11825994733164}, 
        {lat: 42.35147099999303, lng: -71.11833200000623}, 
        {lat: 42.35150594800995, lng: -71.11862429123525}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 63, chain: 64, infoVisible: false, draw:{coord:[ 
        {lat: 42.35150594800995, lng: -71.11862429123525}, 
        {lat: 42.35154953984321, lng: -71.1189888851267}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 64, chain: 65, infoVisible: false, draw:{coord:[ 
        {lat: 42.35154953984321, lng: -71.1189888851267}, 
        {lat: 42.35159313050473, lng: -71.11935347947659}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 65, chain: 66, infoVisible: false, draw:{coord:[ 
        {lat: 42.35159313050473, lng: -71.11935347947659}, 
        {lat: 42.35163671999449, lng: -71.11971807428489}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 66, chain: 67, infoVisible: false, draw:{coord:[ 
        {lat: 42.35163671999449, lng: -71.11971807428489}, 
        {lat: 42.35168030831249, lng: -71.12008266955158}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 67, chain: 68, infoVisible: false, draw:{coord:[ 
        {lat: 42.35168030831249, lng: -71.12008266955158}, 
        {lat: 42.35172389545871, lng: -71.12044726527667}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 68, chain: 69, infoVisible: false, draw:{coord:[ 
        {lat: 42.35172389545871, lng: -71.12044726527667}, 
        {lat: 42.35176748143317, lng: -71.12081186146011}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 69, chain: 70, infoVisible: false, draw:{coord:[ 
        {lat: 42.35176748143317, lng: -71.12081186146011}, 
        {lat: 42.351811066235854, lng: -71.1211764581019}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 70, chain: 71, infoVisible: false, draw:{coord:[ 
        {lat: 42.351811066235854, lng: -71.1211764581019}, 
        {lat: 42.35181399999298, lng: -71.12120100000628}, 
        {lat: 42.35184943354251, lng: -71.12154211418212}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 71, chain: 72, infoVisible: false, draw:{coord:[ 
        {lat: 42.35184943354251, lng: -71.12154211418212}, 
        {lat: 42.351887423207636, lng: -71.1219078470859}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 72, chain: 73, infoVisible: false, draw:{coord:[ 
        {lat: 42.351887423207636, lng: -71.1219078470859}, 
        {lat: 42.351925411695206, lng: -71.12227358038402}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 73, chain: 74, infoVisible: false, draw:{coord:[ 
        {lat: 42.351925411695206, lng: -71.12227358038402}, 
        {lat: 42.35196339900524, lng: -71.1226393140765}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 74, chain: 75, infoVisible: false, draw:{coord:[ 
        {lat: 42.35196339900524, lng: -71.1226393140765}, 
        {lat: 42.352001385137726, lng: -71.1230050481633}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 75, chain: 76, infoVisible: false, draw:{coord:[ 
        {lat: 42.352001385137726, lng: -71.1230050481633}, 
        {lat: 42.35203937009266, lng: -71.12337078264439}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 76, chain: 77, infoVisible: false, draw:{coord:[ 
        {lat: 42.35203937009266, lng: -71.12337078264439}, 
        {lat: 42.35207735387002, lng: -71.12373651751977}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 77, chain: 78, infoVisible: false, draw:{coord:[ 
        {lat: 42.35207735387002, lng: -71.12373651751977}, 
        {lat: 42.35211533646984, lng: -71.12410225278941}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 78, chain: 79, infoVisible: false, draw:{coord:[ 
        {lat: 42.35211533646984, lng: -71.12410225278941}, 
        {lat: 42.35215331789208, lng: -71.1244679884533}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 79, chain: 80, infoVisible: false, draw:{coord:[ 
        {lat: 42.35215331789208, lng: -71.1244679884533}, 
        {lat: 42.35216899999293, lng: -71.12461900000633}, 
        {lat: 42.35206596551555, lng: -71.12478547651288}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 80, chain: 81, infoVisible: false, draw:{coord:[ 
        {lat: 42.35206596551555, lng: -71.12478547651288}, 
        {lat: 42.35189046832953, lng: -71.12506903150016}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 81, chain: 82, infoVisible: false, draw:{coord:[ 
        {lat: 42.35189046832953, lng: -71.12506903150016}, 
        {lat: 42.351714970472045, lng: -71.12535258489993}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 82, chain: 83, infoVisible: false, draw:{coord:[ 
        {lat: 42.351714970472045, lng: -71.12535258489993}, 
        {lat: 42.351710999992896, lng: -71.12535900000637}, 
        {lat: 42.3515420219683, lng: -71.12563896956053}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 83, chain: 84, infoVisible: false, draw:{coord:[ 
        {lat: 42.3515420219683, lng: -71.12563896956053}, 
        {lat: 42.351369131806166, lng: -71.125925418214}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 84, chain: 85, infoVisible: false, draw:{coord:[ 
        {lat: 42.351369131806166, lng: -71.125925418214}, 
        {lat: 42.351196240958146, lng: -71.12621186528635}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 85, chain: 86, infoVisible: false, draw:{coord:[ 
        {lat: 42.351196240958146, lng: -71.12621186528635}, 
        {lat: 42.35102334942428, lng: -71.12649831077762}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 86, chain: 87, infoVisible: false, draw:{coord:[ 
        {lat: 42.35102334942428, lng: -71.12649831077762}, 
        {lat: 42.35093299999287, lng: -71.12664800000637}, 
        {lat: 42.350879224477524, lng: -71.12680871496879}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 87, chain: 88, infoVisible: false, draw:{coord:[ 
        {lat: 42.350879224477524, lng: -71.12680871496879}, 
        {lat: 42.35076658669493, lng: -71.12714534425722}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 88, chain: 89, infoVisible: false, draw:{coord:[ 
        {lat: 42.35076658669493, lng: -71.12714534425722}, 
        {lat: 42.35066999999285, lng: -71.12743400000637}, 
        {lat: 42.3506642243132, lng: -71.12748604833384}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 89, chain: 90, infoVisible: false, draw:{coord:[ 
        {lat: 42.3506642243132, lng: -71.12748604833384}, 
        {lat: 42.350623695003684, lng: -71.12785127751634}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 90, chain: 91, infoVisible: false, draw:{coord:[ 
        {lat: 42.350623695003684, lng: -71.12785127751634}, 
        {lat: 42.350583164540176, lng: -71.1282165061829}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 91, chain: 92, infoVisible: false, draw:{coord:[ 
        {lat: 42.350583164540176, lng: -71.1282165061829}, 
        {lat: 42.35058199999284, lng: -71.12822700000639}, 
        {lat: 42.35060270374859, lng: -71.12858459504372}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 92, chain: 93, infoVisible: false, draw:{coord:[ 
        {lat: 42.35060270374859, lng: -71.12858459504372}, 
        {lat: 42.350624018794974, lng: -71.12895276872142}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 93, chain: 94, infoVisible: false, draw:{coord:[ 
        {lat: 42.350624018794974, lng: -71.12895276872142}, 
        {lat: 42.350645332652626, lng: -71.1293209426002}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 94, chain: 95, infoVisible: false, draw:{coord:[ 
        {lat: 42.350645332652626, lng: -71.1293209426002}, 
        {lat: 42.35066664532151, lng: -71.12968911668004}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 95, chain: 96, infoVisible: false, draw:{coord:[ 
        {lat: 42.35066664532151, lng: -71.12968911668004}, 
        {lat: 42.3506769999928, lng: -71.12986800000643}, 
        {lat: 42.350664836834184, lng: -71.13005715697943}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 96, chain: 97, infoVisible: false, draw:{coord:[ 
        {lat: 42.350664836834184, lng: -71.13005715697943}, 
        {lat: 42.35064117838093, lng: -71.1304250704675}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 97, chain: 98, infoVisible: false, draw:{coord:[ 
        {lat: 42.35064117838093, lng: -71.1304250704675}, 
        {lat: 42.35062799999279, lng: -71.13063000000642}, 
        {lat: 42.35056257354786, lng: -71.13076777966447}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 98, chain: 99, infoVisible: false, draw:{coord:[ 
        {lat: 42.35056257354786, lng: -71.13076777966447}, 
        {lat: 42.3504148817764, lng: -71.1310787971897}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 99, chain: 100, infoVisible: false, draw:{coord:[ 
        {lat: 42.3504148817764, lng: -71.1310787971897}, 
        {lat: 42.35026899999277, lng: -71.13138600000644}, 
        {lat: 42.35026718271208, lng: -71.13138980763236}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 100, chain: 101, infoVisible: false, draw:{coord:[ 
        {lat: 42.35026718271208, lng: -71.13138980763236}, 
        {lat: 42.35011896097425, lng: -71.1317003650525}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 101, chain: 102, infoVisible: false, draw:{coord:[ 
        {lat: 42.35011896097425, lng: -71.1317003650525}, 
        {lat: 42.34997073842383, lng: -71.1320109209921}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 102, chain: 103, infoVisible: false, draw:{coord:[ 
        {lat: 42.34997073842383, lng: -71.1320109209921}, 
        {lat: 42.349822515060815, lng: -71.13232147545122}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 103, chain: 104, infoVisible: false, draw:{coord:[ 
        {lat: 42.349822515060815, lng: -71.13232147545122}, 
        {lat: 42.349674290885254, lng: -71.13263202842984}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 104, chain: 105, infoVisible: false, draw:{coord:[ 
        {lat: 42.349674290885254, lng: -71.13263202842984}, 
        {lat: 42.349526065897145, lng: -71.13294257992797}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 105, chain: 106, infoVisible: false, draw:{coord:[ 
        {lat: 42.349526065897145, lng: -71.13294257992797}, 
        {lat: 42.34937784009651, lng: -71.1332531299456}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 106, chain: 107, infoVisible: false, draw:{coord:[ 
        {lat: 42.34937784009651, lng: -71.1332531299456}, 
        {lat: 42.349229613483345, lng: -71.13356367848276}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 107, chain: 108, infoVisible: false, draw:{coord:[ 
        {lat: 42.349229613483345, lng: -71.13356367848276}, 
        {lat: 42.34908138605766, lng: -71.13387422553943}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 108, chain: 109, infoVisible: false, draw:{coord:[ 
        {lat: 42.34908138605766, lng: -71.13387422553943}, 
        {lat: 42.348933157819474, lng: -71.13418477111561}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 109, chain: 110, infoVisible: false, draw:{coord:[ 
        {lat: 42.348933157819474, lng: -71.13418477111561}, 
        {lat: 42.34878492876882, lng: -71.13449531521132}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 110, chain: 111, infoVisible: false, draw:{coord:[ 
        {lat: 42.34878492876882, lng: -71.13449531521132}, 
        {lat: 42.3486366989057, lng: -71.13480585782658}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 111, chain: 112, infoVisible: false, draw:{coord:[ 
        {lat: 42.3486366989057, lng: -71.13480585782658}, 
        {lat: 42.3484919999927, lng: -71.1351090000065}, 
        {lat: 42.34848916589501, lng: -71.13511692565999}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 112, chain: 113, infoVisible: false, draw:{coord:[ 
        {lat: 42.34848916589501, lng: -71.13511692565999}, 
        {lat: 42.348370215929066, lng: -71.13544957140238}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 113, chain: 114, infoVisible: false, draw:{coord:[ 
        {lat: 42.348370215929066, lng: -71.13544957140238}, 
        {lat: 42.3483199999927, lng: -71.1355900000065}, 
        {lat: 42.3482916528743, lng: -71.13579993518083}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 114, chain: 115, infoVisible: false, draw:{coord:[ 
        {lat: 42.3482916528743, lng: -71.13579993518083}, 
        {lat: 42.34825099999268, lng: -71.1361010000065}, 
        {lat: 42.34825719032856, lng: -71.13616371361191}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 115, chain: 116, infoVisible: false, draw:{coord:[ 
        {lat: 42.34825719032856, lng: -71.13616371361191}, 
        {lat: 42.34829332190176, lng: -71.13652976578219}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 116, chain: 117, infoVisible: false, draw:{coord:[ 
        {lat: 42.34829332190176, lng: -71.13652976578219}, 
        {lat: 42.34831199999265, lng: -71.13671900000652}, 
        {lat: 42.34836316203276, lng: -71.13688350286216}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 117, chain: 118, infoVisible: false, draw:{coord:[ 
        {lat: 42.34836316203276, lng: -71.13688350286216}, 
        {lat: 42.348469077888225, lng: -71.13722406061946}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 118, chain: 119, infoVisible: false, draw:{coord:[ 
        {lat: 42.348469077888225, lng: -71.13722406061946}, 
        {lat: 42.34857499270386, lng: -71.13756461948697}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 119, chain: 120, infoVisible: false, draw:{coord:[ 
        {lat: 42.34857499270386, lng: -71.13756461948697}, 
        {lat: 42.34863699999265, lng: -71.13776400000654}, 
        {lat: 42.34868040782955, lng: -71.13790545942628}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 120, chain: 121, infoVisible: false, draw:{coord:[ 
        {lat: 42.34868040782955, lng: -71.13790545942628}, 
        {lat: 42.34878511769363, lng: -71.13824669584405}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 121, chain: 122, infoVisible: false, draw:{coord:[ 
        {lat: 42.34878511769363, lng: -71.13824669584405}, 
        {lat: 42.348889826514096, lng: -71.13858793336091}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 122, chain: 123, infoVisible: false, draw:{coord:[ 
        {lat: 42.348889826514096, lng: -71.13858793336091}, 
        {lat: 42.34894599999263, lng: -71.13877100000656}, 
        {lat: 42.3489558646111, lng: -71.13894165335276}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 123, chain: 124, infoVisible: false, draw:{coord:[ 
        {lat: 42.3489558646111, lng: -71.13894165335276}, 
        {lat: 42.34897599999262, lng: -71.13929000000657}, 
        {lat: 42.348972741078015, lng: -71.13930938816328}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 124, chain: 125, infoVisible: false, draw:{coord:[ 
        {lat: 42.348972741078015, lng: -71.13930938816328}, 
        {lat: 42.348912203371825, lng: -71.1396695393178}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 125, chain: 126, infoVisible: false, draw:{coord:[ 
        {lat: 42.348912203371825, lng: -71.1396695393178}, 
        {lat: 42.34885799999259, lng: -71.13999200000659}, 
        {lat: 42.348835307636676, lng: -71.14001561357273}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 126, chain: 127, infoVisible: false, draw:{coord:[ 
        {lat: 42.348835307636676, lng: -71.14001561357273}, 
        {lat: 42.34861846706267, lng: -71.14024125583359}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 127, chain: 128, infoVisible: false, draw:{coord:[ 
        {lat: 42.34861846706267, lng: -71.14024125583359}, 
        {lat: 42.3485869999926, lng: -71.14027400000658}, 
        {lat: 42.34837154484852, lng: -71.14039767720598}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 128, chain: 129, infoVisible: false, draw:{coord:[ 
        {lat: 42.34837154484852, lng: -71.14039767720598}, 
        {lat: 42.3482019999926, lng: -71.14049500000658}, 
        {lat: 42.34811592765995, lng: -71.14052880114595}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 129, chain: 130, infoVisible: false, draw:{coord:[ 
        {lat: 42.34811592765995, lng: -71.14052880114595}, 
        {lat: 42.347852934177055, lng: -71.14063207975263}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 130, chain: 131, infoVisible: false, draw:{coord:[ 
        {lat: 42.347852934177055, lng: -71.14063207975263}, 
        {lat: 42.34773599999259, lng: -71.14067800000659}, 
        {lat: 42.347584831505, lng: -71.14070102462816}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 131, chain: 132, infoVisible: false, draw:{coord:[ 
        {lat: 42.347584831505, lng: -71.14070102462816}, 
        {lat: 42.347312638483324, lng: -71.14074248237232}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 132, chain: 133, infoVisible: false, draw:{coord:[ 
        {lat: 42.347312638483324, lng: -71.14074248237232}, 
        {lat: 42.34704044544265, lng: -71.140783939806}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 133, chain: 134, infoVisible: false, draw:{coord:[ 
        {lat: 42.34704044544265, lng: -71.140783939806}, 
        {lat: 42.346934999992584, lng: -71.14080000000658}, 
        {lat: 42.34677497785052, lng: -71.14086810895496}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 134, chain: 135, infoVisible: false, draw:{coord:[ 
        {lat: 42.34677497785052, lng: -71.14086810895496}, 
        {lat: 42.34651376312988, lng: -71.14097928694933}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 135, chain: 136, infoVisible: false, draw:{coord:[ 
        {lat: 42.34651376312988, lng: -71.14097928694933}, 
        {lat: 42.34645099999259, lng: -71.14100600000661}, 
        {lat: 42.346265700575685, lng: -71.14113369598017}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 136, chain: 137, infoVisible: false, draw:{coord:[ 
        {lat: 42.346265700575685, lng: -71.14113369598017}, 
        {lat: 42.34602179739958, lng: -71.14130177649105}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 137, chain: 138, infoVisible: false, draw:{coord:[ 
        {lat: 42.34602179739958, lng: -71.14130177649105}, 
        {lat: 42.34577789399654, lng: -71.14146985573007}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 138, chain: 139, infoVisible: false, draw:{coord:[ 
        {lat: 42.34577789399654, lng: -71.14146985573007}, 
        {lat: 42.34553399036657, lng: -71.14163793369721}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 139, chain: 140, infoVisible: false, draw:{coord:[ 
        {lat: 42.34553399036657, lng: -71.14163793369721}, 
        {lat: 42.34529008650968, lng: -71.14180601039251}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 140, chain: 141, infoVisible: false, draw:{coord:[ 
        {lat: 42.34529008650968, lng: -71.14180601039251}, 
        {lat: 42.34509999999256, lng: -71.1419370000066}, 
        {lat: 42.34504588134459, lng: -71.14197328089739}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 141, chain: 142, infoVisible: false, draw:{coord:[ 
        {lat: 42.34504588134459, lng: -71.14197328089739}, 
        {lat: 42.34480061252306, lng: -71.14213770712703}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 142, chain: 143, infoVisible: false, draw:{coord:[ 
        {lat: 42.34480061252306, lng: -71.14213770712703}, 
        {lat: 42.34455534348463, lng: -71.14230213210689}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 143, chain: 144, infoVisible: false, draw:{coord:[ 
        {lat: 42.34455534348463, lng: -71.14230213210689}, 
        {lat: 42.344310074229305, lng: -71.14246655583696}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 144, chain: 145, infoVisible: false, draw:{coord:[ 
        {lat: 42.344310074229305, lng: -71.14246655583696}, 
        {lat: 42.34406480475708, lng: -71.14263097831727}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 145, chain: 146, infoVisible: false, draw:{coord:[ 
        {lat: 42.34406480475708, lng: -71.14263097831727}, 
        {lat: 42.34381953506796, lng: -71.14279539954786}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 146, chain: 147, infoVisible: false, draw:{coord:[ 
        {lat: 42.34381953506796, lng: -71.14279539954786}, 
        {lat: 42.34357426516196, lng: -71.14295981952874}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 147, chain: 148, infoVisible: false, draw:{coord:[ 
        {lat: 42.34357426516196, lng: -71.14295981952874}, 
        {lat: 42.34348299999254, lng: -71.14302100000663}, 
        {lat: 42.34333611262002, lng: -71.1431416220101}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 148, chain: 149, infoVisible: false, draw:{coord:[ 
        {lat: 42.34333611262002, lng: -71.1431416220101}, 
        {lat: 42.343102177759604, lng: -71.14333372493887}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 149, chain: 150, infoVisible: false, draw:{coord:[ 
        {lat: 42.343102177759604, lng: -71.14333372493887}, 
        {lat: 42.34290699999252, lng: -71.14349400000664}, 
        {lat: 42.34287322264734, lng: -71.14353485700205}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 150, chain: 151, infoVisible: false, draw:{coord:[ 
        {lat: 42.34287322264734, lng: -71.14353485700205}, 
        {lat: 42.342669346077706, lng: -71.1437814643299}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 151, chain: 152, infoVisible: false, draw:{coord:[ 
        {lat: 42.342669346077706, lng: -71.1437814643299}, 
        {lat: 42.34246546900652, lng: -71.14402807006833}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 152, chain: 153, infoVisible: false, draw:{coord:[ 
        {lat: 42.34246546900652, lng: -71.14402807006833}, 
        {lat: 42.34226159143379, lng: -71.14427467421734}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 153, chain: 154, infoVisible: false, draw:{coord:[ 
        {lat: 42.34226159143379, lng: -71.14427467421734}, 
        {lat: 42.34223899999251, lng: -71.14430200000665}, 
        {lat: 42.34212805605797, lng: -71.14459429017629}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 154, chain: 155, infoVisible: false, draw:{coord:[ 
        {lat: 42.34212805605797, lng: -71.14459429017629}, 
        {lat: 42.34200328571316, lng: -71.1449230035315}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 155, chain: 156, infoVisible: false, draw:{coord:[ 
        {lat: 42.34200328571316, lng: -71.1449230035315}, 
        {lat: 42.34187851445214, lng: -71.1452517155573}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 156, chain: 157, infoVisible: false, draw:{coord:[ 
        {lat: 42.34187851445214, lng: -71.1452517155573}, 
        {lat: 42.34175374227491, lng: -71.14558042625367}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 157, chain: 158, infoVisible: false, draw:{coord:[ 
        {lat: 42.34175374227491, lng: -71.14558042625367}, 
        {lat: 42.34164799999248, lng: -71.14585900000668}, 
        {lat: 42.34164427560839, lng: -71.14591509313463}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 158, chain: 159, infoVisible: false, draw:{coord:[ 
        {lat: 42.34164427560839, lng: -71.14591509313463}, 
        {lat: 42.34161985640485, lng: -71.14628286155126}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 159, chain: 160, infoVisible: false, draw:{coord:[ 
        {lat: 42.34161985640485, lng: -71.14628286155126}, 
        {lat: 42.34159543602719, lng: -71.14665062963493}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 160, chain: 161, infoVisible: false, draw:{coord:[ 
        {lat: 42.34159543602719, lng: -71.14665062963493}, 
        {lat: 42.34157101447539, lng: -71.14701839738565}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 161, chain: 162, infoVisible: false, draw:{coord:[ 
        {lat: 42.34157101447539, lng: -71.14701839738565}, 
        {lat: 42.34154659174946, lng: -71.14738616480338}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 162, chain: 163, infoVisible: false, draw:{coord:[ 
        {lat: 42.34154659174946, lng: -71.14738616480338}, 
        {lat: 42.341529999992446, lng: -71.1476360000067}, 
        {lat: 42.34152848016951, lng: -71.14775438577966}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 163, chain: 164, infoVisible: false, draw:{coord:[ 
        {lat: 42.34152848016951, lng: -71.14775438577966}, 
        {lat: 42.34152373986339, lng: -71.14812356812924}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 164, chain: 165, infoVisible: false, draw:{coord:[ 
        {lat: 42.34152373986339, lng: -71.14812356812924}, 
        {lat: 42.341518998368954, lng: -71.14849275037442}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 165, chain: 166, infoVisible: false, draw:{coord:[ 
        {lat: 42.341518998368954, lng: -71.14849275037442}, 
        {lat: 42.34151499999243, lng: -71.14880400000673}, 
        {lat: 42.34150103952675, lng: -71.14885880020414}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 166, chain: 167, infoVisible: false, draw:{coord:[ 
        {lat: 42.34150103952675, lng: -71.14885880020414}, 
        {lat: 42.341412074123866, lng: -71.14920802066787}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 167, chain: 168, infoVisible: false, draw:{coord:[ 
        {lat: 42.341412074123866, lng: -71.14920802066787}, 
        {lat: 42.34132310767757, lng: -71.14955724010761}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 168, chain: 169, infoVisible: false, draw:{coord:[ 
        {lat: 42.34132310767757, lng: -71.14955724010761}, 
        {lat: 42.3412739999924, lng: -71.14975000000673}, 
        {lat: 42.341202823956, lng: -71.14988476372515}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 169, chain: 170, infoVisible: false, draw:{coord:[ 
        {lat: 42.341202823956, lng: -71.14988476372515}, 
        {lat: 42.34104395725367, lng: -71.15018555758213}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 170, chain: 171, infoVisible: false, draw:{coord:[ 
        {lat: 42.34104395725367, lng: -71.15018555758213}, 
        {lat: 42.34088508979186, lng: -71.15048634990747}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 171, chain: 172, infoVisible: false, draw:{coord:[ 
        {lat: 42.34088508979186, lng: -71.15048634990747}, 
        {lat: 42.34072622157064, lng: -71.1507871407012}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 172, chain: 173, infoVisible: false, draw:{coord:[ 
        {lat: 42.34072622157064, lng: -71.1507871407012}, 
        {lat: 42.340701999992376, lng: -71.15083300000677}, 
        {lat: 42.3405407307723, lng: -71.15105811282378}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 173, chain: 174, infoVisible: false, draw:{coord:[ 
        {lat: 42.3405407307723, lng: -71.15105811282378}, 
        {lat: 42.34035045039342, lng: -71.15132371956089}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 174, chain: 175, infoVisible: false, draw:{coord:[ 
        {lat: 42.34035045039342, lng: -71.15132371956089}, 
        {lat: 42.34016016942923, lng: -71.1515893246934}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 175, chain: 176, infoVisible: false, draw:{coord:[ 
        {lat: 42.34016016942923, lng: -71.1515893246934}, 
        {lat: 42.34007299999236, lng: -71.15171100000677}, 
        {lat: 42.33994445004226, lng: -71.151811042005}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 176, chain: 177, infoVisible: false, draw:{coord:[ 
        {lat: 42.33994445004226, lng: -71.151811042005}, 
        {lat: 42.33970722550888, lng: -71.15199565708951}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 177, chain: 178, infoVisible: false, draw:{coord:[ 
        {lat: 42.33970722550888, lng: -71.15199565708951}, 
        {lat: 42.33947000070034, lng: -71.15218027080957}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 178, chain: 179, infoVisible: false, draw:{coord:[ 
        {lat: 42.33947000070034, lng: -71.15218027080957}, 
        {lat: 42.33932899999234, lng: -71.15229000000677}, 
        {lat: 42.33922527455025, lng: -71.15234368898722}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 179, chain: 180, infoVisible: false, draw:{coord:[ 
        {lat: 42.33922527455025, lng: -71.15234368898722}, 
        {lat: 42.338969556657574, lng: -71.15247604949406}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 180, chain: 181, infoVisible: false, draw:{coord:[ 
        {lat: 42.338969556657574, lng: -71.15247604949406}, 
        {lat: 42.33871383862569, lng: -71.15260840896389}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 181, chain: 182, infoVisible: false, draw:{coord:[ 
        {lat: 42.33871383862569, lng: -71.15260840896389}, 
        {lat: 42.33856199999234, lng: -71.1526870000068}, 
        {lat: 42.338464224033196, lng: -71.15275860374027}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 182, chain: 183, infoVisible: false, draw:{coord:[ 
        {lat: 42.338464224033196, lng: -71.15275860374027}, 
        {lat: 42.33836399999234, lng: -71.1528320000068}, 
        {lat: 42.33826229914381, lng: -71.15299824975827}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 183, chain: 184, infoVisible: false, draw:{coord:[ 
        {lat: 42.33826229914381, lng: -71.15299824975827}, 
        {lat: 42.338092999992334, lng: -71.1532750000068}, 
        {lat: 42.338092434851376, lng: -71.15328549232852}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 184, chain: 185, infoVisible: false, draw:{coord:[ 
        {lat: 42.338092434851376, lng: -71.15328549232852}, 
        {lat: 42.3380725995677, lng: -71.15365373981786}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 185, chain: 186, infoVisible: false, draw:{coord:[ 
        {lat: 42.3380725995677, lng: -71.15365373981786}, 
        {lat: 42.338069999992314, lng: -71.1537020000068}, 
        {lat: 42.338152721657124, lng: -71.15400283155807}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 186, chain: 187, infoVisible: false, draw:{coord:[ 
        {lat: 42.338152721657124, lng: -71.15400283155807}, 
        {lat: 42.33824791833209, lng: -71.15434903521033}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 187, chain: 188, infoVisible: false, draw:{coord:[ 
        {lat: 42.33824791833209, lng: -71.15434903521033}, 
        {lat: 42.3383259999923, lng: -71.15463300000681}, 
        {lat: 42.3383536324952, lng: -71.15468794264052}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 188, chain: 189, infoVisible: false, draw:{coord:[ 
        {lat: 42.3383536324952, lng: -71.15468794264052}, 
        {lat: 42.33850733593882, lng: -71.15499355822882}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 189, chain: 190, infoVisible: false, draw:{coord:[ 
        {lat: 42.33850733593882, lng: -71.15499355822882}, 
        {lat: 42.338661038529594, lng: -71.15529917528869}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 190, chain: 191, infoVisible: false, draw:{coord:[ 
        {lat: 42.338661038529594, lng: -71.15529917528869}, 
        {lat: 42.33881474026752, lng: -71.15560479382009}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 191, chain: 192, infoVisible: false, draw:{coord:[ 
        {lat: 42.33881474026752, lng: -71.15560479382009}, 
        {lat: 42.33892799999228, lng: -71.15583000000684}, 
        {lat: 42.338962760695104, lng: -71.15591510286964}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 192, chain: 193, infoVisible: false, draw:{coord:[ 
        {lat: 42.338962760695104, lng: -71.15591510286964}, 
        {lat: 42.33909487153582, lng: -71.15623854543252}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 193, chain: 194, infoVisible: false, draw:{coord:[ 
        {lat: 42.33909487153582, lng: -71.15623854543252}, 
        {lat: 42.33921799999225, lng: -71.15654000000686}, 
        {lat: 42.33922566224421, lng: -71.15656287840271}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 194, chain: 195, infoVisible: false, draw:{coord:[ 
        {lat: 42.33922566224421, lng: -71.15656287840271}, 
        {lat: 42.33933836703334, lng: -71.15689940114005}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 195, chain: 196, infoVisible: false, draw:{coord:[ 
        {lat: 42.33933836703334, lng: -71.15689940114005}, 
        {lat: 42.339451070804685, lng: -71.15723592504779}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 196, chain: 197, infoVisible: false, draw:{coord:[ 
        {lat: 42.339451070804685, lng: -71.15723592504779}, 
        {lat: 42.3395637735582, lng: -71.15757245012588}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 197, chain: 198, infoVisible: false, draw:{coord:[ 
        {lat: 42.3395637735582, lng: -71.15757245012588}, 
        {lat: 42.33957299999224, lng: -71.15760000000687}, 
        {lat: 42.339647678832996, lng: -71.1579237086363}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 198, chain: 199, infoVisible: false, draw:{coord:[ 
        {lat: 42.339647678832996, lng: -71.1579237086363}, 
        {lat: 42.33972901536356, lng: -71.15827628163264}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 199, chain: 200, infoVisible: false, draw:{coord:[ 
        {lat: 42.33972901536356, lng: -71.15827628163264}, 
        {lat: 42.339808999992215, lng: -71.15862300000688}, 
        {lat: 42.33980994799291, lng: -71.15862899743169}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 200, chain: 201, infoVisible: false, draw:{coord:[ 
        {lat: 42.33980994799291, lng: -71.15862899743169}, 
        {lat: 42.33986702898463, lng: -71.15899011822837}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 201, chain: 202, infoVisible: false, draw:{coord:[ 
        {lat: 42.33986702898463, lng: -71.15899011822837}, 
        {lat: 42.33992410882277, lng: -71.15935123963393}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 202, chain: 203, infoVisible: false, draw:{coord:[ 
        {lat: 42.33992410882277, lng: -71.15935123963393}, 
        {lat: 42.33998118750731, lng: -71.15971236164832}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 203, chain: 204, infoVisible: false, draw:{coord:[ 
        {lat: 42.33998118750731, lng: -71.15971236164832}, 
        {lat: 42.34000799999218, lng: -71.1598820000069}, 
        {lat: 42.340014977137464, lng: -71.16007755559586}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 204, chain: 205, infoVisible: false, draw:{coord:[ 
        {lat: 42.340014977137464, lng: -71.16007755559586}, 
        {lat: 42.340028134519194, lng: -71.16044635660805}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 205, chain: 206, infoVisible: false, draw:{coord:[ 
        {lat: 42.340028134519194, lng: -71.16044635660805}, 
        {lat: 42.340041290710275, lng: -71.16081515772514}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 206, chain: 207, infoVisible: false, draw:{coord:[ 
        {lat: 42.340041290710275, lng: -71.16081515772514}, 
        {lat: 42.3400544457107, lng: -71.16118395894716}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 207, chain: 208, infoVisible: false, draw:{coord:[ 
        {lat: 42.3400544457107, lng: -71.16118395894716}, 
        {lat: 42.34006759952047, lng: -71.16155276027405}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 208, chain: 209, infoVisible: false, draw:{coord:[ 
        {lat: 42.34006759952047, lng: -71.16155276027405}, 
        {lat: 42.34008075213959, lng: -71.16192156170581}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 209, chain: 210, infoVisible: false, draw:{coord:[ 
        {lat: 42.34008075213959, lng: -71.16192156170581}, 
        {lat: 42.34009390356807, lng: -71.1622903632424}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 210, chain: 211, infoVisible: false, draw:{coord:[ 
        {lat: 42.34009390356807, lng: -71.1622903632424}, 
        {lat: 42.34010705380588, lng: -71.1626591648838}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 211, chain: 212, infoVisible: false, draw:{coord:[ 
        {lat: 42.34010705380588, lng: -71.1626591648838}, 
        {lat: 42.340120202853036, lng: -71.16302796663001}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 212, chain: 213, infoVisible: false, draw:{coord:[ 
        {lat: 42.340120202853036, lng: -71.16302796663001}, 
        {lat: 42.340133350709536, lng: -71.163396768481}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 213, chain: 214, infoVisible: false, draw:{coord:[ 
        {lat: 42.340133350709536, lng: -71.163396768481}, 
        {lat: 42.34014649737538, lng: -71.16376557043672}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 214, chain: 215, infoVisible: false, draw:{coord:[ 
        {lat: 42.34014649737538, lng: -71.16376557043672}, 
        {lat: 42.34015299999209, lng: -71.16394800000697}, 
        {lat: 42.34014374440262, lng: -71.16413416988962}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 215, chain: 216, infoVisible: false, draw:{coord:[ 
        {lat: 42.34014374440262, lng: -71.16413416988962}, 
        {lat: 42.34012542814686, lng: -71.16450257084944}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 216, chain: 217, infoVisible: false, draw:{coord:[ 
        {lat: 42.34012542814686, lng: -71.16450257084944}, 
        {lat: 42.340107110711386, lng: -71.16487097154639}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 217, chain: 218, infoVisible: false, draw:{coord:[ 
        {lat: 42.340107110711386, lng: -71.16487097154639}, 
        {lat: 42.340088792096175, lng: -71.16523937198046}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 218, chain: 219, infoVisible: false, draw:{coord:[ 
        {lat: 42.340088792096175, lng: -71.16523937198046}, 
        {lat: 42.340070472301264, lng: -71.16560777215163}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 219, chain: 220, infoVisible: false, draw:{coord:[ 
        {lat: 42.340070472301264, lng: -71.16560777215163}, 
        {lat: 42.340053999992044, lng: -71.165939000007}, 
        {lat: 42.340048892965854, lng: -71.16597561398018}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 220, chain: 221, infoVisible: false, draw:{coord:[ 
        {lat: 42.340048892965854, lng: -71.16597561398018}, 
        {lat: 42.339998278310986, lng: -71.1663384824828}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 221, chain: 222, infoVisible: false, draw:{coord:[ 
        {lat: 42.339998278310986, lng: -71.1663384824828}, 
        {lat: 42.33998899999203, lng: -71.16640500000702}, 
        {lat: 42.34011402727265, lng: -71.16665505411044}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
        
        {id: 222, chain: 223, infoVisible: false, draw:{coord:[ 
        {lat: 42.34011402727265, lng: -71.16665505411044}, 
        {lat: 42.340167999992026, lng: -71.16676300000702}, 
        {lat: 42.34030899999203, lng: -71.16690800000703}
        ],strokeColor:'#FF0000',strokeOpacity:0.8,strokeWeight:6} },
                //API format
    ]
      );
  });

};