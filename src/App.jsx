import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from "recharts";
import { ChevronRight, ChevronLeft, BookOpen, LayoutDashboard, DollarSign, FileText, AlertTriangle, GitBranch, TrendingUp, FolderOpen, Globe, Users, Zap, ArrowRight, CheckCircle, Clock, AlertCircle, Info, ArrowLeft, X, Target, Layers, Handshake, BarChart3, Shield, Calendar, Search } from "lucide-react";

const C={bg:"#000",card:"#1c1c1e",cardH:"#2c2c2e",cb:"#38383a",surf:"#0a0a0a",
  blue:"#0a84ff",blueL:"#409cff",blueD:"#0a84ff33",green:"#30d158",red:"#ff453a",
  orange:"#ff9f0a",yellow:"#ffd60a",purple:"#bf5af2",teal:"#64d2ff",pink:"#ff375f",
  w:"#f5f5f7",g1:"#e5e5e7",g2:"#aeaeb2",g3:"#8e8e93",g4:"#636366",g5:"#48484a",g6:"#3a3a3c",g7:"#2c2c2e"};
const F="'SF Pro Display',-apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif";
const FM="'SF Mono','Menlo',monospace";
const MO=["Jul'25","Aug'25","Sep'25","Oct'25","Nov'25","Dec'25","Jan'26","Feb'26","Mar'26","Apr'26","May'26","Jun'26"];
const MF=["July 2025","August 2025","September 2025","October 2025","November 2025","December 2025","January 2026","February 2026","March 2026","April 2026","May 2026","June 2026"];
const REV=[1520,1580,1610,1690,1720,1780,1810,1860,1920,1980,2040,2100];
const PLN=[1480,1550,1620,1650,1700,1750,1800,1840,1900,1950,2000,2060];
const sd=(s)=>{let x=s;return()=>{x=(x*16807)%2147483647;return(x-1)/2147483646;};};
const CU=[{n:"Tesla",v:"Auto",g:"US",roy:4200,p:20,u:840,r:5.00,rk:"Low"},{n:"Porsche",v:"Auto",g:"EU",roy:3150,p:15,u:450,r:7.00,rk:"Low"},
  {n:"BMW",v:"Auto",g:"EU",roy:2730,p:13,u:390,r:7.00,rk:"Low"},{n:"Daimler",v:"Auto",g:"EU",roy:2310,p:11,u:330,r:7.00,rk:"Med"},
  {n:"Suzuki",v:"Auto",g:"APAC",roy:1680,p:8,u:560,r:3.00,rk:"Low"},{n:"Samsung",v:"CE",g:"APAC",roy:1470,p:7,u:980,r:1.50,rk:"Med"},
  {n:"GoPro",v:"CE",g:"US",roy:1050,p:5,u:350,r:3.00,rk:"Med"},{n:"LG",v:"CE",g:"APAC",roy:840,p:4,u:420,r:2.00,rk:"Med"},
  {n:"Peloton",v:"CE",g:"US",roy:630,p:3,u:210,r:3.00,rk:"High"}];
const VT=[{n:"Automotive",v:67,c:C.blue},{n:"Consumer",v:19,c:C.teal},{n:"IoT",v:8,c:C.orange},{n:"Wearables",v:6,c:C.purple}];
const GE=[{n:"US (HQ)",rev:7350,hc:65,cur:"USD",ent:"DSP Concepts, Inc."},{n:"Germany",rev:5460,hc:28,cur:"EUR",ent:"DSP Concepts GmbH"},
  {n:"UK",rev:3780,hc:15,cur:"GBP",ent:"DSP Concepts UK Ltd"},{n:"Taiwan",rev:4410,hc:12,cur:"TWD",ent:"DSP Concepts Taiwan Co."}];
const MD=MO.map((m,i)=>{const rng=sd(i*1000+42);const rev=REV[i];const plan=PLN[i];
  const arB=[3200,3100,3400,3600,3300,3500,3700,3400,3600,3800,3500,3900];
  const apB=[1100,1050,1200,1150,1080,1250,1300,1180,1220,1350,1280,1400];
  const dfB=[820,850,890,920,880,950,980,940,970,1020,990,1050];
  const f12=Array.from({length:12},(_,j)=>Math.round(rev*(1+0.02*(j+1))+(rng()*40-20)));
  const f12p=Array.from({length:12},(_,j)=>Math.round(plan*(1+0.022*(j+1))+(rng()*20-10)));
  return{mo:m,mf:MF[i],rev,plan,ar:arB[i],ap:apB[i],df:dfB[i],f12,f12p,
    arC:[{n:"Tesla",a:Math.round(arB[i]*0.22+rng()*40),p:22},{n:"Porsche",a:Math.round(arB[i]*0.17+rng()*30),p:17},{n:"BMW",a:Math.round(arB[i]*0.14+rng()*25),p:14},{n:"Daimler",a:Math.round(arB[i]*0.11+rng()*20),p:11},{n:"Samsung",a:Math.round(arB[i]*0.09+rng()*15),p:9}],
    apV:[{n:"AWS",a:Math.round(apB[i]*0.24+rng()*20),p:24},{n:"TSMC",a:Math.round(apB[i]*0.18+rng()*15),p:18},{n:"Cooley",a:Math.round(apB[i]*0.12+rng()*10),p:12},{n:"EY",a:Math.round(apB[i]*0.09+rng()*8),p:9},{n:"WeWork",a:Math.round(apB[i]*0.07+rng()*5),p:7}],
    cogs:Math.round(rev*0.22),gp:Math.round(rev*0.78),rd:Math.round(rev*0.35),sm:Math.round(rev*0.15),ga:Math.round(rev*0.12),
    oi:Math.round(rev*0.16),ni:Math.round(rev*0.16-12-rev*0.16*0.08),cash:7800+i*50+Math.round(rng()*200),prep:340+Math.round(rng()*40),
    ppe:1200-i*8,ip:4500,gw:800,apBs:apB[i],accr:680+Math.round(rng()*60),dfBs:dfB[i],
    cfO:Math.round(rev*0.21),cfI:-Math.round(120+rng()*40),cfF:-Math.round(30+rng()*20),
    arAg:[{b:"0-30",a:Math.round(arB[i]*0.55),p:55},{b:"31-60",a:Math.round(arB[i]*0.25),p:25},{b:"61-90",a:Math.round(arB[i]*0.12),p:12},{b:"91-120",a:Math.round(arB[i]*0.05),p:5},{b:"120+",a:Math.round(arB[i]*0.03),p:3}],
    apAg:[{b:"0-30",a:Math.round(apB[i]*0.60),p:60},{b:"31-60",a:Math.round(apB[i]*0.25),p:25},{b:"61-90",a:Math.round(apB[i]*0.10),p:10},{b:"90+",a:Math.round(apB[i]*0.05),p:5}],
  };});
MD.forEach(m=>{m.tca=m.cash+m.ar+m.prep;m.ta=m.tca+m.ppe+m.ip+m.gw;m.tcl=m.apBs+m.accr+m.dfBs;m.eq=m.ta-m.tcl;});
const PS=[{s:"Lead Identified",prob:5,c:C.g4,deals:18,gross:24000,days:12},{s:"Qualified",prob:15,c:C.g3,deals:14,gross:19500,days:28},
  {s:"Discovery Done",prob:30,c:C.blue,deals:10,gross:15200,days:45},{s:"Demo/Solution",prob:50,c:C.blueL,deals:7,gross:11800,days:62},
  {s:"Proposal",prob:70,c:C.teal,deals:5,gross:8400,days:78},{s:"Contract Review",prob:90,c:C.green,deals:3,gross:5200,days:92},
  {s:"Closed Won",prob:100,c:C.green,deals:8,gross:21000,days:0}];
const LD=[{n:"Honda",reason:"In-house development",val:2400,stage:"Proposal",days:85},{n:"Hyundai",reason:"Selected HARMAN",val:3100,stage:"Contract",days:102},
  {n:"Volvo",reason:"Budget deferred",val:1800,stage:"Demo",days:55},{n:"Rivian",reason:"Acquired audio startup",val:2200,stage:"Discovery",days:38},
  {n:"Stellantis",reason:"Vendor consolidation",val:4500,stage:"Proposal",days:91},{n:"Xiaomi",reason:"IP concerns",val:1600,stage:"Qualified",days:22}];
const DR=[{c:"Financial Statements",d:8,p:45,o:"[VP Finance]",u:"Pending"},{c:"Audit Reports",d:4,p:20,o:"[VP Finance]",u:"Pending"},
  {c:"Tax Returns",d:12,p:55,o:"[VP Finance]",u:"Apr 2026"},{c:"Revenue Contracts",d:24,p:70,o:"Legal",u:"May 2026"},
  {c:"IP & Patents",d:18,p:80,o:"CTO",u:"May 2026"},{c:"Cap Table",d:6,p:65,o:"[VP Finance]",u:"Jan 2026"},
  {c:"Governance",d:10,p:50,o:"Legal",u:"Mar 2026"},{c:"HR & Benefits",d:8,p:60,o:"HR",u:"Apr 2026"},
  {c:"Int'l Entities",d:16,p:40,o:"[VP Finance]",u:"Pending"},{c:"Insurance",d:5,p:75,o:"Ops",u:"May 2026"},
  {c:"Budgets",d:6,p:30,o:"[VP Finance]",u:"Pending"},{c:"Transfer Pricing",d:8,p:15,o:"[VP Finance]",u:"Pending"}];
const MK=[{n:"Hearing Healthcare",tam:10.2,sam:1.5,pen1:2,pen5:12,rpu:4.5,rdC:1200,ttfr:12,
  sw:{s:["Platform handles hearing-frequency DSP","Processor-agnostic architecture"],w:["No audiology OEM relationships","FDA knowledge gap"],o:["OTC hearing aids legalized","$10.2B market at 7-8% CAGR"],t:["Sonova/Demant proprietary platforms","Regulatory timeline"]}},
  {n:"AR/VR Spatial",tam:8.5,sam:1.2,pen1:3,pen5:15,rpu:3.0,rdC:1500,ttfr:15,
  sw:{s:["Low-latency real-time processing","Multi-core support"],w:["No Meta/Apple relationships","Limited spatial modules"],o:["$100B+ market by 2030","No dominant embedded platform"],t:["Apple proprietary stack","Qualcomm bundling"]}},
  {n:"Smart Home",tam:12.0,sam:2.0,pen1:4,pen5:18,rpu:1.5,rdC:800,ttfr:9,
  sw:{s:["TalkTo Alexa-qualified","Far-field voice proven"],w:["Low per-unit royalty","High volume required"],o:["Matter protocol unifying ecosystem","Voice appliances growing"],t:["Amazon/Google in-house","Price race to bottom"]}},
  {n:"Military",tam:4.8,sam:0.8,pen1:1,pen5:8,rpu:25.0,rdC:2000,ttfr:24,
  sw:{s:["Noise cancellation transferable","Processor-agnostic for MIL-SPEC"],w:["No defense relationships","No clearances"],o:["$4.8B market","Vehicle intercoms modernizing"],t:["L3Harris/Thales entrenched","ITAR complexity"]}},
  {n:"Teleconference",tam:6.2,sam:1.0,pen1:3,pen5:14,rpu:2.5,rdC:600,ttfr:8,
  sw:{s:["Echo cancellation proven","Hybrid work driving investment"],w:["Crowded market","Low switching costs"],o:["Conference room refresh cycle","AI-enhanced meeting audio"],t:["Microsoft Teams integrating","Commoditization"]}},
  {n:"Medical Devices",tam:3.5,sam:0.5,pen1:1,pen5:6,rpu:15.0,rdC:1800,ttfr:20,
  sw:{s:["Safety-critical experience from automotive","Hardware-agnostic"],w:["FDA/CE burden","No references"],o:["Ultrasound enhancement growing","Wireless monitoring"],t:["Medtronic/Philips proprietary","Small volume"]}},
  {n:"Wearables",tam:15.0,sam:2.5,pen1:5,pen5:20,rpu:0.8,rdC:700,ttfr:8,
  sw:{s:["Bone conduction expertise","Low-power DSP proven"],w:["Very low per-unit royalty","Apple dominates"],o:["80-90M AirPods/yr non-Apple needs platform","Fitness audio growing"],t:["Qualcomm Snapdragon Sound","Chinese commoditization"]}},
  {n:"Robotics",tam:2.8,sam:0.4,pen1:1,pen5:5,rpu:8.0,rdC:1000,ttfr:14,
  sw:{s:["Real-time voice command processing","Multi-mic support"],w:["Nascent market","Audio low priority vs vision"],o:["Humanoid robots need voice","Service robots growing"],t:["ROS may standardize differently","Market small"]}},
  {n:"EV Sound",tam:3.2,sam:1.8,pen1:8,pen5:35,rpu:2.0,rdC:400,ttfr:6,
  sw:{s:["Already in Tesla/Porsche EVs","AVAS mandate guarantees demand"],w:["Limited to current OEMs","Low complexity"],o:["17.4M BEVs in 2026","Brand sound signatures premium"],t:["OEMs may build basic AVAS","Cerence competing"]}}];
const PA=[{n:"Cambridge Consultants",type:"Integrator",mkts:["Hearing","Medical","Smart Home"],margin:60,deals:4,avg:280,enbl:80,on:true},
  {n:"STMicroelectronics",type:"Tech Partner",mkts:["Auto","Wearables","IoT"],margin:85,deals:6,avg:350,enbl:120,on:true},
  {n:"Analog Devices",type:"Tech Partner",mkts:["Auto","Military","Teleconf"],margin:82,deals:3,avg:420,enbl:100,on:true},
  {n:"MediaTek",type:"Strategic",mkts:["Wearables","Smart Home","AR/VR"],margin:80,deals:5,avg:220,enbl:90,on:true},
  {n:"XMOS",type:"Tech Partner",mkts:["Smart Home","Teleconf","Robotics"],margin:78,deals:3,avg:180,enbl:60,on:true},
  {n:"AMD",type:"Tech Partner",mkts:["Auto","AR/VR"],margin:84,deals:2,avg:500,enbl:150,on:true},
  {n:"CRI Middleware",type:"Channel",mkts:["Auto","EV Sound"],margin:65,deals:4,avg:200,enbl:50,on:true},
  {n:"Alps Alpine",type:"Dev Partner",mkts:["Auto","EV Sound"],margin:70,deals:3,avg:320,enbl:70,on:true}];
const EV=[{n:"CES 2027",dt:"Jan 7-10, 2027",loc:"Las Vegas, NV",cat:"Industry",rel:"Consumer, Wearables, Smart Home",key:"Apple, Samsung, Qualcomm, Bose, Sony",pri:"Must Attend"},
  {n:"Embedded World 2027",dt:"Mar 16-18, 2027",loc:"Nuremberg, Germany",cat:"Industry",rel:"Automotive, IoT, All embedded",key:"STMicro, NXP, MediaTek, AMD, TI",pri:"Must Attend"},
  {n:"AES Automotive Audio",dt:"Jul 29-31, 2026",loc:"Detroit, MI",cat:"Industry",rel:"Automotive — core market",key:"HARMAN, Bose, Porsche, BMW, Cerence",pri:"Must Attend"},
  {n:"AES Europe 2026",dt:"May 28-30, 2026",loc:"Copenhagen, Denmark",cat:"Industry",rel:"Broad audio engineering",key:"Audio OEMs, chipset vendors, researchers",pri:"Consider"},
  {n:"IEEE ICASSP 2026",dt:"Apr 6-11, 2026",loc:"Hyderabad, India",cat:"University",rel:"Signal processing research, AI/ML audio",key:"MIT, Stanford, Georgia Tech researchers",pri:"Consider"},
  {n:"AAA + HearTECH 2026",dt:"Apr 22-25, 2026",loc:"US (TBD)",cat:"Industry",rel:"Hearing Healthcare expansion",key:"Sonova, Demant, WS Audiology, Bose Health",pri:"Strategic"},
  {n:"World Congress Audiology",dt:"May 24-27, 2026",loc:"Seoul, South Korea",cat:"University",rel:"Global audiology research",key:"International audiology researchers",pri:"Monitor"},
  {n:"Interspeech 2026",dt:"Sep 2026",loc:"TBD",cat:"University",rel:"Voice/speech processing — TalkTo",key:"Google, Amazon, Microsoft speech teams",pri:"Consider"},
  {n:"DAGA (German Acoustics)",dt:"Mar 2027",loc:"Germany",cat:"University",rel:"Acoustics research — Stuttgart office",key:"Fraunhofer IIS, German OEMs",pri:"Consider"},
  {n:"IEEE WASPAA 2027",dt:"Oct 2027",loc:"TBD",cat:"University",rel:"Audio signal processing research",key:"Academic DSP researchers",pri:"Monitor"}];
const UN=[{n:"Stanford CCRMA",loc:"Stanford, CA",focus:"Audio DSP, spatial audio, music tech",faculty:"Julius O. Smith (DSP pioneer)",rel:"Talent pipeline, research collaboration"},
  {n:"MIT Media Lab",loc:"Cambridge, MA",focus:"Signal processing, audio AI",faculty:"Multiple signal processing faculty",rel:"Paul Beckmann's alma mater — direct connection"},
  {n:"Georgia Tech",loc:"Atlanta, GA",focus:"DSP Leadership (TI-funded), audio ML",faculty:"DSP research center",rel:"Academic partnerships, recruiting"},
  {n:"Fraunhofer IIS",loc:"Erlangen, Germany",focus:"Invented MP3, automotive audio R&D",faculty:"Applied audio research labs",rel:"Near Stuttgart office — direct collaboration"},
  {n:"IRCAM",loc:"Paris, France",focus:"Audio/music research, spatial sound",faculty:"World-leading audio researchers",rel:"European research partnerships"},
  {n:"Aalborg University",loc:"Aalborg, Denmark",focus:"Audio/acoustics research",faculty:"Renowned acoustics department",rel:"Nordic talent pipeline"}];
const PT=[{cat:"Automotive Audio DSP",holders:[{co:"HARMAN/Samsung",count:342,trend:"↑"},{co:"Qualcomm",count:218,trend:"↑"},{co:"Bose",count:195,trend:"→"},{co:"DSP Concepts",count:12,trend:"↑"},{co:"Cirrus Logic",count:156,trend:"→"}]},
  {cat:"Noise Cancellation",holders:[{co:"Bose",count:289,trend:"→"},{co:"Apple",count:245,trend:"↑"},{co:"Sony",count:178,trend:"↑"},{co:"Qualcomm",count:134,trend:"↑"},{co:"HARMAN",count:98,trend:"→"}]},
  {cat:"Voice UI / Beamforming",holders:[{co:"Amazon",count:412,trend:"↑"},{co:"Google",count:356,trend:"↑"},{co:"Apple",count:298,trend:"↑"},{co:"Qualcomm",count:167,trend:"↑"},{co:"DSP Concepts",count:8,trend:"↑"}]},
  {cat:"Spatial Audio / 3D Sound",holders:[{co:"Dolby",count:523,trend:"→"},{co:"Apple",count:187,trend:"↑"},{co:"Sony",count:156,trend:"↑"},{co:"HARMAN",count:89,trend:"→"},{co:"Fraunhofer",count:234,trend:"→"}]},
  {cat:"Hearing Aid / OTC Audio",holders:[{co:"Sonova",count:445,trend:"→"},{co:"Demant",count:389,trend:"→"},{co:"WS Audiology",count:267,trend:"→"},{co:"Bose",count:34,trend:"↑"},{co:"Apple",count:28,trend:"↑"}]},
  {cat:"EV Sound Design / AVAS",holders:[{co:"HARMAN",count:67,trend:"↑"},{co:"Continental",count:45,trend:"↑"},{co:"Cerence",count:38,trend:"↑"},{co:"DSP Concepts",count:5,trend:"↑"},{co:"Bose",count:22,trend:"→"}]}];
// ─── STYLES & COMPONENTS ───
const crd={background:C.card,borderRadius:14,border:`1px solid ${C.cb}`,padding:20,marginBottom:14};
const mc=(c)=>({...crd,padding:"14px 18px",borderTop:`3px solid ${c}`,flex:1,minWidth:130});
const st={fontSize:20,fontWeight:700,color:C.w,fontFamily:F,marginBottom:14,letterSpacing:-0.3};
const lb={fontSize:11,fontWeight:600,color:C.g3,fontFamily:F,textTransform:"uppercase",letterSpacing:1.2,marginBottom:6};
const tH={textAlign:"left",padding:"7px 9px",fontSize:9,color:C.g3,fontWeight:600,textTransform:"uppercase",letterSpacing:0.5,borderBottom:`1px solid ${C.g6}`};
const tC={padding:"7px 9px",fontSize:11,fontFamily:F,borderBottom:`1px solid ${C.g7}`,color:C.g1};
const cs={fontFamily:F,fontSize:11,borderRadius:8,background:C.card,border:`1px solid ${C.g6}`};
const rw={display:"flex",gap:10,flexWrap:"wrap"};
const VIEWS=[{id:"ceo",l:"CEO View",icon:LayoutDashboard},{id:"rev",l:"Revenue Intel",icon:DollarSign},{id:"fin",l:"VP Finance",icon:FileText},
  {id:"pipe",l:"Pipeline",icon:GitBranch},{id:"perf",l:"Plan Performance",icon:BarChart3},{id:"churn",l:"Churn Simulator",icon:AlertTriangle},
  {id:"mkt",l:"Market Expansion",icon:Layers},{id:"partner",l:"Partner Economics",icon:Handshake},{id:"strat",l:"Strategic Options",icon:TrendingUp},
  {id:"dr",l:"Data Room",icon:FolderOpen},{id:"global",l:"Global Ops",icon:Globe},{id:"swot",l:"SWOT Roadmap",icon:Target},
  {id:"events",l:"Events",icon:Calendar},{id:"patents",l:"Patent Landscape",icon:Search}];
function MT({label:l,value:v,sub,color:c}){return(<div style={mc(c||C.blue)}><div style={lb}>{l}</div>
  <div style={{fontSize:24,fontWeight:700,color:c||C.w,fontFamily:FM,lineHeight:1.2}}>{v}</div>
  {sub&&<div style={{fontSize:10,color:C.g3,marginTop:3,fontFamily:F}}>{sub}</div>}</div>);}
function PB({pct,color:c,h=6}){return(<div style={{background:C.g6,borderRadius:h/2,height:h,width:"100%",overflow:"hidden"}}>
  <div style={{width:`${Math.min(pct,100)}%`,height:"100%",background:c||C.blue,borderRadius:h/2,transition:"width 0.4s"}}/></div>);}
function MP({value:v,onChange:fn,style:s}){return(<select value={v} onChange={e=>fn(+e.target.value)} style={{
  padding:"6px 10px",borderRadius:8,border:`1px solid ${C.g6}`,fontFamily:F,fontSize:11,background:C.card,color:C.w,fontWeight:600,cursor:"pointer",outline:"none",...s
}}>{MF.map((m,i)=><option key={i} value={i}>{m}</option>)}</select>);}
function Btn({children,active,onClick,color:c}){return(<button onClick={onClick} style={{padding:"6px 14px",borderRadius:8,
  border:`1px solid ${active?(c||C.blue):C.g6}`,background:active?(c||C.blue)+"22":"transparent",
  color:active?(c||C.blue):C.g3,fontFamily:F,fontSize:11,fontWeight:active?700:400,cursor:"pointer"}}>{children}</button>);}

// ─── README MODAL ───
function ReadMeModal({onClose}){
  const sections=[
    {t:"CEO View",d:"Executive snapshot of financial position for any selected month.",h:"Use the month picker to view AR, AP, deferred revenue, and monthly revenue vs plan. The side-by-side comparison lets you pick two months and compare their forward 12-month revenue projections with plan and variance."},
    {t:"Revenue Intelligence",d:"Comprehensive royalty revenue tracking and ASC 606 compliance.",h:"Review the OEM royalty tracker for per-customer unit volumes and rates. The accrual vs actual chart validates estimation methodology. ASC 606 breakdown shows performance obligation timing."},
    {t:"VP Finance",d:"Monthly financial close package with full three-statement access.",h:"Click any month tile to open the financial package. Use tabs to navigate: Key Metrics (operating KPIs), P&L, Balance Sheet, Cash Flows, AR Aging, and AP Aging. Use the month picker to navigate between months."},
    {t:"Pipeline",d:"Sales pipeline health with two-period comparison capability.",h:"Select two periods using the month pickers. Each panel shows all 7 stages from Lead Identified (5%) through Closed Won (100%), with gross and weighted values, days in pipeline, and win/loss rates. Click 'View lost deals' to see reasons for losses."},
    {t:"Plan Performance",d:"Year-to-date budget vs actual with executive commentary.",h:"The cumulative chart shows plan vs actual over the fiscal year. The variance table breaks it down monthly. The three commentary panels (Outperforming / Watch / Underperforming) provide narrative context."},
    {t:"Churn Simulator",d:"Model the revenue impact of losing one or more customers simultaneously.",h:"Select one or more customers using the checkboxes. The waterfall chart shows combined quarterly revenue decline over 24 months, color-coded by customer. Individual customer cards appear below with per-customer detail."},
    {t:"Market Expansion",d:"Adjacent market sizing with DCF-based investment analysis.",h:"Review TAM, SAM, penetration rates, R&D costs, and returns for each market. Click rows to build a portfolio. The summary shows total investment, revenue, NPV, and ROI. Column definitions are at the bottom."},
    {t:"Partner Economics",d:"Channel partner ROI analysis with dynamic portfolio modeling.",h:"Each partner has a green checkbox — toggle to include/exclude. Summary metrics update dynamically. Compare direct vs partner channel economics. Column: TTR = Time to Revenue, PEN = Penetration Rate."},
    {t:"Strategic Options",d:"IPO vs Strategic Sale vs Growth Round scenario analysis.",h:"Adjust the three sliders (growth rate, gross margin, exit multiple) and watch enterprise valuations update in real-time across all three exit paths."},
    {t:"Data Room",d:"Due diligence document readiness tracker.",h:"Each category shows document count, completion %, owner, and last updated. Items marked [VP Finance] in red indicate categories awaiting finance leadership."},
    {t:"Global Operations",d:"Multi-entity structure with transfer pricing and FX exposure.",h:"Review the four-entity structure, revenue distribution, transfer pricing flows with risk ratings, and unhedged FX exposure across EUR, GBP, and TWD."},
    {t:"SWOT Roadmap",d:"Strategic assessment with investment calculator across all markets.",h:"Select a market category. Each SWOT quadrant has items with investment sliders. Adjust to model costs of amplifying strengths, mitigating weaknesses, capturing opportunities, and addressing threats. The grand total sums across all markets."},
    {t:"Events Calendar",d:"Industry conferences and university research programs.",h:"Toggle between Industry Conferences and University Programs. Events show dates, locations, relevance to DSP Concepts, key attendees, and strategic priority."},
    {t:"Patent Landscape",d:"Competitive IP intelligence across audio technology categories.",h:"Select a patent category to see filing volumes by competitor. Identifies white spaces and IP concentration areas relevant to market expansion decisions."},
  ];
  return(<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onClose}>
    <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(8px)"}}/>
    <div onClick={e=>e.stopPropagation()} style={{position:"relative",zIndex:201,width:"92%",maxWidth:700,maxHeight:"88vh",overflowY:"auto",
      background:`linear-gradient(135deg,#0a1628 0%,#1a3a6b 50%,#0a1628 100%)`,borderRadius:20,padding:"36px 32px",boxShadow:"0 24px 80px rgba(0,0,0,0.7)"}}>
      <div onClick={onClose} style={{position:"absolute",top:14,right:14,cursor:"pointer",color:"rgba(255,255,255,0.4)"}}><X size={20}/></div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}><Info size={20} color={C.teal}/>
        <span style={{fontSize:13,fontWeight:800,color:C.teal,fontFamily:F,textTransform:"uppercase",letterSpacing:2}}>Dashboard Guide</span></div>
      <h1 style={{fontSize:24,fontWeight:800,color:C.w,fontFamily:F,margin:0,lineHeight:1.3,marginBottom:16,letterSpacing:-0.5}}>DSP Concepts — CFO Operating System</h1>
      <p style={{fontSize:14,fontWeight:600,color:"rgba(255,255,255,0.9)",fontFamily:F,lineHeight:1.8,margin:"0 0 20px"}}>
        A proof-of-concept financial infrastructure platform designed for DSP Concepts' embedded audio licensing model. All data is illustrative — the architecture is production-ready.</p>
      {sections.map((s,i)=>(<div key={i} style={{marginBottom:12,padding:"12px 16px",background:"rgba(255,255,255,0.05)",borderRadius:10,borderLeft:`3px solid ${C.teal}`}}>
        <div style={{fontSize:13,fontWeight:700,color:C.w,fontFamily:F,marginBottom:4}}>{s.t}</div>
        <div style={{fontSize:12,fontWeight:600,color:C.teal,fontFamily:F,marginBottom:4}}>{s.d}</div>
        <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",fontFamily:F,lineHeight:1.6}}>{s.h}</div></div>))}
      <div style={{marginTop:20,padding:"14px 18px",background:"rgba(0,212,170,0.1)",border:"1px solid rgba(0,212,170,0.25)",borderRadius:12}}>
        <p style={{fontSize:13,fontWeight:700,color:C.teal,fontFamily:F,margin:0,lineHeight:1.6}}>
          The finance function illuminates. It builds the infrastructure that keeps all strategic options open.</p></div></div></div>);
}
// ─── CEO VIEW ───
function CEOView(){const[mi,setMi]=useState(11);const[mA,setMA]=useState(6);const[mB,setMB]=useState(11);
  const mf=MD[mi];const mfA=MD[mA];const mfB=MD[mB];const fL=Array.from({length:12},(_,j)=>`M${j+1}`);
  const cD=fL.map((m,j)=>({m,aA:mfA.f12[j],pA:mfA.f12p[j],vA:mfA.f12[j]-mfA.f12p[j],aB:mfB.f12[j],pB:mfB.f12p[j],vB:mfB.f12[j]-mfB.f12p[j]}));
  return(<div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
    <h2 style={{...st,marginBottom:0}}>CEO Executive Overview</h2><MP value={mi} onChange={setMi}/></div>
    <div style={rw}><MT label="Accounts Receivable" value={`$${(mf.ar/1000).toFixed(1)}M`} sub={mf.mf} color={C.blue}/>
      <MT label="Accounts Payable" value={`$${(mf.ap/1000).toFixed(1)}M`} sub={mf.mf} color={C.orange}/>
      <MT label="Deferred Revenue" value={`$${(mf.df/1000).toFixed(1)}M`} color={C.purple}/>
      <MT label="Revenue" value={`$${(mf.rev/1000).toFixed(1)}M`} sub={`Plan: $${(mf.plan/1000).toFixed(1)}M | Var: ${mf.rev>=mf.plan?"+":""}$${mf.rev-mf.plan}K`} color={mf.rev>=mf.plan?C.green:C.red}/></div>
    <div style={crd}><div style={{...lb,marginBottom:10}}>Forward 12-Month — Actual vs Plan</div>
      <div style={{display:"flex",gap:8,marginBottom:12,alignItems:"center"}}>
        {[{c:C.blue,v:mA,fn:setMA,l:"A"},{c:C.teal,v:mB,fn:setMB,l:"B"}].map(x=>(<div key={x.l} style={{display:"flex",alignItems:"center",gap:5}}>
          <div style={{width:10,height:10,borderRadius:3,background:x.c}}/><MP value={x.v} onChange={x.fn}/></div>))}
        <span style={{fontSize:11,color:C.g4,fontFamily:F,margin:"0 4px"}}>vs</span></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        {[{mf:mfA,c:C.blue,k:"A"},{mf:mfB,c:C.teal,k:"B"}].map(({mf:m,c,k})=>(<div key={k} style={{border:`1px solid ${C.g6}`,borderRadius:10,padding:12,borderTop:`3px solid ${c}`,background:C.surf}}>
          <div style={{fontSize:12,fontWeight:700,color:c,fontFamily:F,marginBottom:4}}>{m.mf}</div>
          <div style={{fontSize:10,color:C.g3,fontFamily:F,marginBottom:6}}>Total: <strong style={{color:C.w}}>${(m.f12.reduce((a,b)=>a+b,0)/1000).toFixed(1)}M</strong> | Plan: <strong style={{color:C.w}}>${(m.f12p.reduce((a,b)=>a+b,0)/1000).toFixed(1)}M</strong></div>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:10}}>
            <thead><tr>{["Mo","Act","Plan","Var"].map(h=><th key={h} style={{...tH,fontSize:8,textAlign:h==="Mo"?"left":"right"}}>{h}</th>)}</tr></thead>
            <tbody>{cD.map((r,i)=>{const v=k==="A"?r.vA:r.vB;const a=k==="A"?r.aA:r.aB;const p=k==="A"?r.pA:r.pB;
              return(<tr key={i} style={{background:i%2?C.surf:"transparent"}}>
                <td style={{...tC,fontSize:10}}>{r.m}</td><td style={{...tC,fontSize:10,textAlign:"right",fontFamily:FM}}>${a}</td>
                <td style={{...tC,fontSize:10,textAlign:"right",fontFamily:FM,color:C.g4}}>${p}</td>
                <td style={{...tC,fontSize:10,textAlign:"right",fontFamily:FM,fontWeight:600,color:v>=0?C.green:C.red}}>{v>=0?"+":""}{v}</td></tr>);})}</tbody></table></div>))}</div></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      {[{t:"Top 5 AR",d:mf.arC,c:C.blue},{t:"Top 5 AP",d:mf.apV,c:C.teal}].map(x=>(<div key={x.t} style={crd}><div style={lb}>{x.t} — {mf.mf}</div>
        <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}>
          <thead><tr>{["Name","$K","%"].map(h=><th key={h} style={tH}>{h}</th>)}</tr></thead>
          <tbody>{x.d.map((r,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}>
            <td style={{...tC,fontWeight:600,color:C.w}}>{r.n}</td><td style={{...tC,fontFamily:FM}}>${r.a.toLocaleString()}</td>
            <td style={tC}><div style={{display:"flex",alignItems:"center",gap:5}}><PB pct={r.p*1.5} color={x.c} h={4}/><span style={{fontFamily:FM,fontSize:9,width:26}}>{r.p}%</span></div></td></tr>))}</tbody></table></div>))}</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <div style={crd}><div style={lb}>ARR Trend</div><ResponsiveContainer width="100%" height={170}><ComposedChart data={MO.map((m,i)=>({m,arr:REV[i]}))} margin={{top:5,right:5,left:0,bottom:0}}>
        <CartesianGrid strokeDasharray="3 3" stroke={C.g7}/><XAxis dataKey="m" tick={{fontSize:8,fill:C.g4}}/><YAxis tick={{fontSize:8,fill:C.g4}} tickFormatter={v=>`$${v/1000}M`}/>
        <Tooltip contentStyle={cs}/><Bar dataKey="arr" fill={C.blue} radius={[3,3,0,0]} name="ARR ($K)" opacity={0.8}/></ComposedChart></ResponsiveContainer></div>
      <div style={crd}><div style={lb}>Revenue by Vertical</div><ResponsiveContainer width="100%" height={140}><PieChart><Pie data={VT.map(v=>({name:v.n,value:v.v}))} cx="50%" cy="50%" innerRadius={35} outerRadius={58} dataKey="value" paddingAngle={3}>
        {VT.map((v,i)=><Cell key={i} fill={v.c}/>)}</Pie><Tooltip formatter={v=>`${v}%`} contentStyle={cs}/></PieChart></ResponsiveContainer>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>{VT.map(v=>(<div key={v.n} style={{display:"flex",alignItems:"center",gap:3,fontSize:9,fontFamily:F,color:C.g2}}>
          <div style={{width:6,height:6,borderRadius:2,background:v.c}}/>{v.n} ({v.v}%)</div>))}</div></div></div></div>);}

// ─── REVENUE VIEW ───
function RevView(){const rng=sd(999);const aD=MO.map((m,i)=>({m,est:REV[i]*0.65,act:REV[i]*0.65*(0.95+rng()*0.1)}));
  const obs=[{n:"Platform License",v:4200,p:20,t:"Point-in-time"},{n:"Per-Unit Royalties",v:12600,p:60,t:"Usage-based"},{n:"Engineering",v:2520,p:12,t:"Over time"},{n:"Maintenance",v:1680,p:8,t:"Ratable"}];
  return(<div><h2 style={st}>Revenue Intelligence</h2>
    <div style={rw}><MT label="Total ARR" value="$21.0M" sub="Royalty $12.6M | License $4.2M" color={C.blue}/><MT label="Accrual Var" value="±3.2%" sub="Within threshold" color={C.green}/><MT label="Avg $/Unit" value="$3.80" sub="Auto: $5.67" color={C.teal}/></div>
    <div style={crd}><div style={lb}>OEM Royalty Tracker</div><div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}>
      <thead><tr>{["Customer","Vertical","Geo","Units(K)","Rate","Royalty($K)","%","Risk"].map(h=><th key={h} style={tH}>{h}</th>)}</tr></thead>
      <tbody>{CU.map((c,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}>
        <td style={{...tC,fontWeight:600,color:C.w}}>{c.n}</td><td style={{...tC,color:C.g3}}>{c.v}</td><td style={{...tC,color:C.g3}}>{c.g}</td>
        <td style={{...tC,fontFamily:FM}}>{c.u.toLocaleString()}</td><td style={{...tC,fontFamily:FM}}>${c.r.toFixed(2)}</td>
        <td style={{...tC,fontFamily:FM,fontWeight:600,color:C.w}}>${c.roy.toLocaleString()}</td><td style={{...tC,fontFamily:FM}}>{c.p}%</td>
        <td style={tC}><span style={{fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:8,background:c.rk==="Low"?C.green+"22":c.rk==="Med"?C.orange+"22":C.red+"22",
          color:c.rk==="Low"?C.green:c.rk==="Med"?C.orange:C.red}}>{c.rk}</span></td></tr>))}</tbody></table></div></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <div style={crd}><div style={lb}>Accrual vs Actual</div><ResponsiveContainer width="100%" height={170}><LineChart data={aD}><CartesianGrid strokeDasharray="3 3" stroke={C.g7}/>
        <XAxis dataKey="m" tick={{fontSize:8,fill:C.g4}}/><YAxis tick={{fontSize:8,fill:C.g4}} tickFormatter={v=>`$${(v/1000).toFixed(0)}K`}/>
        <Tooltip contentStyle={cs}/><Line dataKey="est" stroke={C.blue} strokeWidth={2} dot={false} name="Est"/><Line dataKey="act" stroke={C.teal} strokeWidth={2} strokeDasharray="5 5" dot={false} name="Act"/></LineChart></ResponsiveContainer></div>
      <div style={crd}><div style={lb}>ASC 606 Obligations</div>{obs.map(o=>(<div key={o.n} style={{marginBottom:10}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:10,fontFamily:F,marginBottom:3}}>
          <span style={{fontWeight:600,color:C.w}}>{o.n}</span><span style={{color:C.g3}}>${(o.v/1000).toFixed(1)}M ({o.p}%) — {o.t}</span></div>
        <PB pct={o.p*1.6} color={C.blue}/></div>))}
        <div style={{marginTop:6,padding:"6px 10px",background:C.blue+"12",borderRadius:8,fontSize:10,fontFamily:F,color:C.g2}}>Royalties: sales-or-usage-based exception (ASC 606-10-55-65)</div></div></div></div>);}
// ─── VP FINANCE ───
function FinView(){const[sel,setSel]=useState(null);const[tab,setTab]=useState("km");
  if(sel!==null){const mf=MD[sel];const tabs=[{id:"km",l:"Key Metrics"},{id:"pl",l:"P&L"},{id:"bs",l:"Balance Sheet"},{id:"cf",l:"Cash Flows"},{id:"ar",l:"AR Aging"},{id:"ap",l:"AP Aging"}];
    return(<div><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
      <div onClick={()=>{setSel(null);setTab("km");}} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:4,color:C.blue,fontSize:12,fontFamily:F,fontWeight:600}}><ArrowLeft size={14}/>Back</div>
      <h2 style={{...st,marginBottom:0,flex:1}}>{mf.mf}</h2><MP value={sel} onChange={v=>{setSel(v);setTab("km");}}/></div>
      <div style={{display:"flex",gap:4,marginBottom:14,flexWrap:"wrap"}}>{tabs.map(t=>(<Btn key={t.id} active={tab===t.id} onClick={()=>setTab(t.id)}>{t.l}</Btn>))}</div>
      {tab==="km"&&<div><div style={rw}><MT label="Revenue" value={`$${(mf.rev/1000).toFixed(1)}M`} color={C.blue}/><MT label="Gross Margin" value={`${((mf.rev-mf.cogs)/mf.rev*100).toFixed(0)}%`} color={C.green}/>
        <MT label="EBITDA" value={`$${(mf.oi+45)}K`} color={C.teal}/><MT label="Cash Flow" value={`$${mf.cfO}K`} sub="From operations" color={C.purple}/></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12}}>
          <div style={crd}><div style={lb}>Headcount by Location</div>{GE.map(g=>(<div key={g.n} style={{display:"flex",justifyContent:"space-between",fontSize:11,fontFamily:F,padding:"4px 0",borderBottom:`1px solid ${C.g7}`}}>
            <span style={{color:C.g2}}>{g.n}</span><span style={{fontFamily:FM,color:C.w}}>{g.hc}</span></div>))}
            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,fontFamily:F,padding:"4px 0",fontWeight:700}}><span style={{color:C.w}}>Total</span><span style={{fontFamily:FM,color:C.w}}>120</span></div></div>
          <div style={crd}><div style={lb}>Key Operating Metrics</div>
            {[["Customers",32],["Top 3 Concentration","48%"],["Active Contracts",28],["Renewals (Next 3 Mo)",6],["R&D Investment",`$${mf.rd}K`],["S&M Investment",`$${mf.sm}K`],
              ["Pipeline (Gross)","$105.1M"],["Pipeline (Weighted)","$32.4M"],["Win Rate","57%"],["Loss Rate","43%"],["CAC","$42K"],["LTV","$380K"],["Payback","14 mo"],["Churn %","4.2%"]
            ].map(([k,v])=>(<div key={k} style={{display:"flex",justifyContent:"space-between",fontSize:10,fontFamily:F,padding:"3px 0",borderBottom:`1px solid ${C.g7}`}}>
              <span style={{color:C.g3}}>{k}</span><span style={{fontFamily:FM,color:C.w,fontWeight:600}}>{v}</span></div>))}</div></div>
        <div style={crd}><div style={lb}>Pipeline by Stage</div>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:10}}>
            <thead><tr>{["Stage","Deals","Gross ($K)","Weighted ($K)","Prob"].map(h=><th key={h} style={{...tH,fontSize:8}}>{h}</th>)}</tr></thead>
            <tbody>{PS.map((s,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}>
              <td style={{...tC,fontWeight:600,color:C.w,fontSize:10}}>{s.s}</td><td style={{...tC,fontFamily:FM,fontSize:10}}>{s.deals}</td>
              <td style={{...tC,fontFamily:FM,fontSize:10}}>${(s.gross/1000).toFixed(1)}M</td>
              <td style={{...tC,fontFamily:FM,fontSize:10,color:C.teal}}>${(s.gross*s.prob/100/1000).toFixed(1)}M</td>
              <td style={{...tC,fontFamily:FM,fontSize:10}}>{s.prob}%</td></tr>))}</tbody></table></div></div>}
      {tab==="pl"&&<div style={crd}><div style={lb}>Income Statement</div><table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}><thead><tr><th style={tH}>Line</th><th style={{...tH,textAlign:"right"}}>$K</th></tr></thead>
        <tbody>{[{n:"Royalty Revenue",v:Math.round(mf.rev*0.60)},{n:"License Revenue",v:Math.round(mf.rev*0.20)},{n:"Services",v:Math.round(mf.rev*0.12)},{n:"Maintenance",v:Math.round(mf.rev*0.08)},
          {n:"Total Revenue",v:mf.rev,b:1,br:1},{n:"COGS",v:-mf.cogs},{n:"Gross Profit",v:mf.gp,b:1,br:1},
          {n:"R&D",v:-mf.rd,ind:1},{n:"S&M",v:-mf.sm,ind:1},{n:"G&A",v:-mf.ga,ind:1},{n:"Total OpEx",v:-(mf.rd+mf.sm+mf.ga),b:1,br:1},
          {n:"Operating Income",v:mf.oi,b:1,hl:1},{n:"Interest",v:-12},{n:"Tax",v:-Math.round(mf.oi*0.08)},{n:"Net Income",v:mf.ni,b:1,hl:1,br:1}
        ].map((r,i)=>(<tr key={i} style={{borderBottom:r.br?`2px solid ${C.g5}`:`1px solid ${C.g7}`,background:r.hl?C.green+"0d":"transparent"}}>
          <td style={{...tC,fontWeight:r.b?700:400,paddingLeft:r.ind?24:9,color:r.b?C.w:C.g2}}>{r.n}</td>
          <td style={{...tC,textAlign:"right",fontFamily:FM,fontWeight:r.b?700:400,color:r.v<0?C.red:C.w}}>{r.v<0?`(${Math.abs(r.v)})`:r.v.toLocaleString()}</td></tr>))}</tbody></table></div>}
      {tab==="bs"&&<div style={crd}><div style={lb}>Balance Sheet</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        {[{t:"ASSETS",c:C.blue,rows:[{n:"Cash",v:mf.cash},{n:"AR",v:mf.ar},{n:"Prepaid",v:mf.prep},{n:"Current Assets",v:mf.tca,b:1,br:1},{n:"PP&E",v:mf.ppe},{n:"IP",v:mf.ip},{n:"Goodwill",v:mf.gw},{n:"Total Assets",v:mf.ta,b:1,hl:1}]},
          {t:"LIAB & EQUITY",c:C.orange,rows:[{n:"AP",v:mf.apBs},{n:"Accrued",v:mf.accr},{n:"Deferred Rev",v:mf.dfBs},{n:"Current Liab",v:mf.tcl,b:1,br:1},{n:"Equity",v:mf.eq,b:1},{n:"Total L&E",v:mf.ta,b:1,hl:1}]}
        ].map(s=>(<div key={s.t}><div style={{fontSize:12,fontWeight:700,color:C.w,fontFamily:F,marginBottom:6,borderBottom:`2px solid ${s.c}`,paddingBottom:4}}>{s.t}</div>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}><tbody>{s.rows.map((r,i)=>(
            <tr key={i} style={{borderBottom:r.br?`2px solid ${C.g5}`:`1px solid ${C.g7}`,background:r.hl?C.blue+"0d":"transparent"}}>
              <td style={{...tC,fontWeight:r.b?700:400}}>{r.n}</td><td style={{...tC,textAlign:"right",fontFamily:FM,fontWeight:r.b?700:400}}>${r.v.toLocaleString()}</td></tr>))}</tbody></table></div>))}</div></div>}
      {tab==="cf"&&<div style={crd}><div style={lb}>Cash Flows</div><table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}><tbody>
        {[{n:"Net Income",v:mf.ni,s:"Operating"},{n:"D&A",v:45},{n:"Working Capital",v:Math.round(mf.rev*0.01)},{n:"Cash from Ops",v:mf.cfO,b:1,br:1},
          {n:"CapEx",v:mf.cfI,s:"Investing"},{n:"Cash from Investing",v:mf.cfI,b:1,br:1},{n:"Debt",v:mf.cfF,s:"Financing"},{n:"Cash from Financing",v:mf.cfF,b:1,br:1},
          {n:"Net Change",v:mf.cfO+mf.cfI+mf.cfF,b:1,hl:1,br:1}
        ].map((r,i)=>(<tr key={i} style={{borderBottom:r.br?`2px solid ${C.g5}`:`1px solid ${C.g7}`,background:r.hl?C.green+"0d":"transparent"}}>
          <td style={{...tC,fontWeight:r.b?700:400,color:r.b?C.w:C.g2}}>{r.s&&<div style={{fontSize:9,fontWeight:700,color:C.blue,textTransform:"uppercase"}}>{r.s}</div>}{r.n}</td>
          <td style={{...tC,textAlign:"right",fontFamily:FM,fontWeight:r.b?700:400,color:r.v<0?C.red:C.w}}>{r.v<0?`(${Math.abs(r.v)})`:`$${r.v}`}</td></tr>))}</tbody></table></div>}
      {tab==="ar"&&(()=>{const d=mf.arAg;const cl=C.blue;
        return (<div style={crd}><div style={lb}>AR Aging</div>
          <ResponsiveContainer width="100%" height={160}><BarChart data={d}><CartesianGrid strokeDasharray="3 3" stroke={C.g7}/>
            <XAxis dataKey="b" tick={{fontSize:8,fill:C.g4}}/><YAxis tick={{fontSize:8,fill:C.g4}}/><Tooltip contentStyle={cs}/>
            <Bar dataKey="a" name="$K" radius={[4,4,0,0]}>{d.map((e,i)=><Cell key={i} fill={i<2?cl:i<3?C.orange:C.red}/>)}</Bar></BarChart></ResponsiveContainer>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11,marginTop:6}}>
            <thead><tr>{["Bucket","$K","%"].map(h=><th key={h} style={tH}>{h}</th>)}</tr></thead>
            <tbody>{d.map((a,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}><td style={{...tC,fontWeight:600,color:C.w}}>{a.b}</td><td style={{...tC,fontFamily:FM}}>${a.a}</td>
              <td style={tC}><div style={{display:"flex",alignItems:"center",gap:5}}><PB pct={a.p} color={i<2?cl:i<3?C.orange:C.red} h={4}/><span style={{fontFamily:FM,fontSize:9,width:26}}>{a.p}%</span></div></td></tr>))}</tbody></table></div>);})()}
      {tab==="ap"&&(()=>{const d=mf.apAg;const cl=C.teal;
        return (<div style={crd}><div style={lb}>AP Aging</div>
          <ResponsiveContainer width="100%" height={160}><BarChart data={d}><CartesianGrid strokeDasharray="3 3" stroke={C.g7}/>
            <XAxis dataKey="b" tick={{fontSize:8,fill:C.g4}}/><YAxis tick={{fontSize:8,fill:C.g4}}/><Tooltip contentStyle={cs}/>
            <Bar dataKey="a" name="$K" radius={[4,4,0,0]}>{d.map((e,i)=><Cell key={i} fill={i<2?cl:i<3?C.orange:C.red}/>)}</Bar></BarChart></ResponsiveContainer>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11,marginTop:6}}>
            <thead><tr>{["Bucket","$K","%"].map(h=><th key={h} style={tH}>{h}</th>)}</tr></thead>
            <tbody>{d.map((a,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}><td style={{...tC,fontWeight:600,color:C.w}}>{a.b}</td><td style={{...tC,fontFamily:FM}}>${a.a}</td>
              <td style={tC}><div style={{display:"flex",alignItems:"center",gap:5}}><PB pct={a.p} color={i<2?cl:i<3?C.orange:C.red} h={4}/><span style={{fontFamily:FM,fontSize:9,width:26}}>{a.p}%</span></div></td></tr>))}</tbody></table></div>);})()}</div>);}
  return(<div><h2 style={st}>VP Finance — Monthly Close</h2><p style={{fontSize:12,color:C.g3,fontFamily:F,marginBottom:14}}>Select a month for the full financial package including Key Metrics.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>{MD.map((mf,i)=>(<div key={i} onClick={()=>setSel(i)} style={{...crd,cursor:"pointer",padding:12,borderLeft:`3px solid ${C.blue}`,position:"relative"}}
      onMouseEnter={e=>e.currentTarget.style.background=C.cardH} onMouseLeave={e=>e.currentTarget.style.background=C.card}>
      <div style={{fontSize:11,fontWeight:700,color:C.w,fontFamily:F,marginBottom:5}}>{mf.mf}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:3}}>
        {[["Rev",`$${(mf.rev/1000).toFixed(1)}M`,C.w],["NI",`$${mf.ni}K`,mf.ni>0?C.green:C.red]].map(([l,v,c])=>(<div key={l}><div style={{fontSize:7,color:C.g4,fontFamily:F,textTransform:"uppercase"}}>{l}</div>
          <div style={{fontSize:13,fontWeight:700,fontFamily:FM,color:c}}>{v}</div></div>))}</div><ChevronRight size={10} color={C.g5} style={{position:"absolute",top:8,right:8}}/></div>))}</div></div>);}
// ─── PIPELINE (TWO-PERIOD) ───
function gPD(mi){const rng=sd(mi*777+13);const m=0.85+mi*0.03;return PS.map(s=>({...s,deals:Math.max(1,Math.round(s.deals*m+rng()*3-1)),gross:Math.round(s.gross*m+rng()*1500-750),days:s.days>0?Math.round(s.days*(0.9+rng()*0.2)):0}));}
function gLD(mi){const rng=sd(mi*333+7);return LD.slice(0,Math.max(2,Math.round(4+rng()*4))).map(d=>({...d,val:Math.round(d.val*(0.8+rng()*0.4))}));}
function PP({mi,color:cl,label:l2}){const stgs=gPD(mi);const losses=gLD(mi);const[sL,setSL]=useState(false);const mx=Math.max(...stgs.map(s=>s.gross));
  const tG=stgs.reduce((a,s)=>a+s.gross,0);const tW=stgs.reduce((a,s)=>a+s.gross*s.prob/100,0);const won=stgs[6].deals;const wr=Math.round(won/(won+losses.length)*100);
  return(<div style={{...crd,borderTop:`3px solid ${cl}`}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
      <span style={{fontSize:13,fontWeight:700,color:cl,fontFamily:F}}>{l2}</span></div>
    <div style={{display:"flex",gap:8,marginBottom:10,flexWrap:"wrap"}}>
      {[["Gross",`$${(tG/1000).toFixed(1)}M`,C.blue],["Weighted",`$${(tW/1000).toFixed(1)}M`,C.teal],["Win",`${wr}%`,C.green],["Loss",`${100-wr}%`,C.red]].map(([l,v,c])=>(
        <div key={l} style={{padding:"6px 12px",background:C.surf,borderRadius:8,borderTop:`2px solid ${c}`}}><div style={{fontSize:8,color:C.g4,fontFamily:F,textTransform:"uppercase"}}>{l}</div>
          <div style={{fontSize:14,fontWeight:700,fontFamily:FM,color:c}}>{v}</div></div>))}</div>
    {stgs.map(s=>(<div key={s.s} style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
      <div style={{width:100,fontSize:9,fontWeight:600,fontFamily:F,color:C.g1,textAlign:"right"}}>{s.s}</div>
      <div style={{flex:1}}><div style={{height:18,background:s.c+"33",borderRadius:4,width:`${(s.gross/mx)*100}%`}}><div style={{height:"100%",background:s.c,borderRadius:4,width:`${s.prob}%`,opacity:0.9}}/></div></div>
      <div style={{width:50,fontSize:8,fontFamily:FM,color:C.g3,textAlign:"right"}}>${(s.gross/1000).toFixed(1)}M</div>
      <div style={{width:45,fontSize:8,fontFamily:FM,color:C.teal,textAlign:"right"}}>${(s.gross*s.prob/100/1000).toFixed(1)}M</div>
      <div style={{width:25,fontSize:8,fontFamily:FM,color:C.g4,textAlign:"right"}}>{s.days>0?`${s.days}d`:""}</div></div>))}
    <div onClick={()=>setSL(!sL)} style={{marginTop:8,cursor:"pointer",fontSize:10,color:C.red,fontFamily:F,fontWeight:600}}>{sL?"▾ Hide":"▸ View"} losses ({losses.length})</div>
    {sL&&<table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:10,marginTop:6}}>
      <thead><tr>{["Co","Reason","$K","Stage"].map(h=><th key={h} style={{...tH,fontSize:8}}>{h}</th>)}</tr></thead>
      <tbody>{losses.map((d,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}>
        <td style={{...tC,fontWeight:600,color:C.w,fontSize:10}}>{d.n}</td><td style={{...tC,color:C.g2,fontSize:10}}>{d.reason}</td>
        <td style={{...tC,fontFamily:FM,fontSize:10}}>${d.val.toLocaleString()}</td><td style={{...tC,color:C.g3,fontSize:10}}>{d.stage}</td></tr>))}</tbody></table>}</div>);}
function PipeView(){const[pA,setPA]=useState(6);const[pB,setPB]=useState(11);
  return(<div><h2 style={st}>Pipeline — Period Comparison</h2>
    <div style={{display:"flex",gap:8,marginBottom:12,alignItems:"center"}}>
      {[{c:C.blue,v:pA,fn:setPA,l:"Period A"},{c:C.teal,v:pB,fn:setPB,l:"Period B"}].map(x=>(<div key={x.l} style={{display:"flex",alignItems:"center",gap:5}}>
        <div style={{width:10,height:10,borderRadius:3,background:x.c}}/><span style={{fontSize:11,color:C.g2,fontFamily:F}}>{x.l}:</span><MP value={x.v} onChange={x.fn}/></div>))}
      <span style={{fontSize:11,color:C.g4,fontFamily:F}}>vs</span></div>
    <PP mi={pA} color={C.blue} label={MF[pA]}/><PP mi={pB} color={C.teal} label={MF[pB]}/></div>);}

// ─── PLAN PERFORMANCE ───
function PerfView(){const ytdA=REV.reduce((a,b)=>a+b,0);const ytdP=PLN.reduce((a,b)=>a+b,0);const ytdV=ytdA-ytdP;
  const cD=MO.map((m,i)=>({m,actual:REV.slice(0,i+1).reduce((a,b)=>a+b,0),plan:PLN.slice(0,i+1).reduce((a,b)=>a+b,0)}));
  return(<div><h2 style={st}>Plan Performance — YTD</h2>
    <div style={{...crd,borderTop:`3px solid ${ytdV>=0?C.green:C.red}`}}>
      <div style={{fontSize:11,color:C.g3,fontFamily:F,marginBottom:10}}>Fiscal Year: July 2025 — June 2026</div>
      <div style={rw}><MT label="YTD Actual" value={`$${(ytdA/1000).toFixed(1)}M`} color={C.blue}/><MT label="YTD Plan" value={`$${(ytdP/1000).toFixed(1)}M`} color={C.g3}/>
        <MT label="Variance" value={`${ytdV>=0?"+":""}$${(ytdV/1000).toFixed(1)}M`} sub={`${((ytdV/ytdP)*100).toFixed(1)}%`} color={ytdV>=0?C.green:C.red}/></div></div>
    <div style={crd}><div style={lb}>Cumulative Actual vs Plan</div><ResponsiveContainer width="100%" height={220}><AreaChart data={cD} margin={{top:5,right:5,left:0,bottom:0}}>
      <CartesianGrid strokeDasharray="3 3" stroke={C.g7}/><XAxis dataKey="m" tick={{fontSize:9,fill:C.g4}}/><YAxis tick={{fontSize:9,fill:C.g4}} tickFormatter={v=>`$${(v/1000).toFixed(0)}M`}/>
      <Tooltip contentStyle={cs}/><Area dataKey="plan" stroke={C.g4} fill={C.g4} fillOpacity={0.08} strokeWidth={2} strokeDasharray="5 5" name="Plan"/>
      <Area dataKey="actual" stroke={C.blue} fill={C.blue} fillOpacity={0.12} strokeWidth={2.5} name="Actual"/></AreaChart></ResponsiveContainer></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
      {[{t:"Outperforming",c:C.green,items:["Auto royalties +8% — Tesla volume beat","Porsche refresh pulled forward","Services utilization 92% vs 85% plan"]},
        {t:"Watch Items",c:C.orange,items:["CE softening — Samsung below forecast","DSO trending 65→72 days","EUR/USD headwind -$120K"]},
        {t:"Underperforming",c:C.red,items:["IoT revenue 15% below plan","Peloton declining faster than plan","Taiwan filing costs +$45K over budget"]}
      ].map(s=>(<div key={s.t} style={{...crd,borderTop:`3px solid ${s.c}`}}><div style={{fontSize:12,fontWeight:700,color:s.c,fontFamily:F,marginBottom:6}}>{s.t}</div>
        {s.items.map((item,i)=>(<div key={i} style={{fontSize:11,color:C.g2,fontFamily:F,marginBottom:5,paddingLeft:8,borderLeft:`2px solid ${s.c}33`}}>{item}</div>))}</div>))}</div></div>);}

// ─── CHURN SIMULATOR (MULTI-SELECT, QUARTERLY WATERFALL) ───
function ChurnView(){const[sel,setSel]=useState([]);const toggle=(n)=>setSel(s=>s.includes(n)?s.filter(x=>x!==n):[...s,n]);
  const selC=CU.filter(c=>sel.includes(c.n));const QS=["Q3'25","Q4'25","Q1'26","Q2'26","Q3'26","Q4'26","Q1'27","Q2'27"];
  const baseQ=5250; // quarterly base revenue
  const colors=[C.blue,C.teal,C.purple,C.orange,C.pink,C.green,C.red,C.yellow,C.blueL];
  const wfData=QS.map((q,qi)=>{let remaining=baseQ;const losses={};selC.forEach((c,ci)=>{
    const qLoss=(c.roy/4)*Math.min(1,(qi+1)/8);losses[c.n]=Math.round(qLoss);remaining-=qLoss;});
    return{q,remaining:Math.round(remaining),...losses};});
  return(<div><h2 style={st}>Customer Churn Simulator</h2>
    <div style={{...crd,background:C.orange+"0d",border:`1px solid ${C.orange}33`}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}><AlertTriangle size={14} color={C.orange}/>
        <span style={{fontSize:12,fontWeight:700,color:C.w,fontFamily:F}}>Multi-Customer Scenario — 24 Months by Quarter</span></div>
      <p style={{fontSize:11,color:C.g2,fontFamily:F,margin:0}}>Select one or more customers to model combined revenue impact.</p></div>
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>{CU.map((c,i)=>{const on=sel.includes(c.n);
      return(<button key={c.n} onClick={()=>toggle(c.n)} style={{padding:"6px 14px",borderRadius:8,border:`1px solid ${on?C.red:C.g6}`,
        background:on?C.red+"22":"transparent",color:on?C.red:C.g3,fontFamily:F,fontSize:11,fontWeight:on?700:400,cursor:"pointer",
        display:"flex",alignItems:"center",gap:5}}>
        <div style={{width:14,height:14,borderRadius:4,border:`2px solid ${on?C.red:C.g5}`,background:on?C.red:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
          {on&&<CheckCircle size={8} color={C.w}/>}</div>{c.n} ({c.p}%)</button>);})}</div>
    {selC.length>0?(<>
      <div style={rw}><MT label="Combined Revenue Lost" value={`$${(selC.reduce((a,c)=>a+c.roy,0)/1000).toFixed(1)}M`} sub={`${selC.reduce((a,c)=>a+c.p,0)}% of ARR`} color={C.red}/>
        <MT label="Customers Affected" value={selC.length} color={C.orange}/>
        <MT label="Wins to Backfill" value={Math.ceil(selC.reduce((a,c)=>a+c.roy,0)/400)} sub="At $400K/win" color={C.blue}/></div>
      <div style={crd}><div style={lb}>Combined Quarterly Waterfall — 24 Months</div>
        <ResponsiveContainer width="100%" height={260}><BarChart data={wfData} margin={{top:10,right:5,left:0,bottom:0}}>
          <CartesianGrid strokeDasharray="3 3" stroke={C.g7}/><XAxis dataKey="q" tick={{fontSize:9,fill:C.g4}}/>
          <YAxis tick={{fontSize:9,fill:C.g4}} tickFormatter={v=>`$${(v/1000).toFixed(1)}M`}/><Tooltip contentStyle={cs}/>
          <Bar dataKey="remaining" stackId="a" fill={C.g5} name="Remaining Rev ($K)" radius={[0,0,0,0]}/>
          {selC.map((c,i)=>(<Bar key={c.n} dataKey={c.n} stackId="a" fill={colors[i%colors.length]} name={`${c.n} Loss ($K)`}/>))}
        </BarChart></ResponsiveContainer>
        <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginTop:8}}>
          <div style={{display:"flex",alignItems:"center",gap:3,fontSize:9,fontFamily:F,color:C.g3}}><div style={{width:8,height:8,borderRadius:2,background:C.g5}}/>Remaining</div>
          {selC.map((c,i)=>(<div key={c.n} style={{display:"flex",alignItems:"center",gap:3,fontSize:9,fontFamily:F,color:C.g2}}>
            <div style={{width:8,height:8,borderRadius:2,background:colors[i%colors.length]}}/>{c.n}</div>))}</div></div>
      {selC.map((c,ci)=>{const qData=QS.map((q,qi)=>({q,base:baseQ,impact:baseQ-Math.round((c.roy/4)*Math.min(1,(qi+1)/8))}));
        return(<div key={c.n} style={{...crd,borderLeft:`3px solid ${colors[ci%colors.length]}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontSize:13,fontWeight:700,color:colors[ci%colors.length],fontFamily:F}}>{c.n}</span>
            <span style={{fontSize:12,fontFamily:FM,color:C.red}}>-${(c.roy/1000).toFixed(1)}M ({c.p}%)</span></div>
          <ResponsiveContainer width="100%" height={140}><AreaChart data={qData}><CartesianGrid strokeDasharray="3 3" stroke={C.g7}/>
            <XAxis dataKey="q" tick={{fontSize:8,fill:C.g4}}/><YAxis tick={{fontSize:8,fill:C.g4}} tickFormatter={v=>`$${(v/1000).toFixed(1)}M`}/>
            <Tooltip contentStyle={cs}/><Area dataKey="base" stroke={C.g5} fill={C.g5} fillOpacity={0.1} strokeWidth={1} strokeDasharray="3 3" name="Baseline"/>
            <Area dataKey="impact" stroke={colors[ci%colors.length]} fill={colors[ci%colors.length]} fillOpacity={0.15} strokeWidth={2} name="Post-Churn"/></AreaChart></ResponsiveContainer></div>);})}
    </>):(<div style={{...crd,textAlign:"center",padding:36}}><Users size={28} color={C.g5}/><p style={{fontSize:13,color:C.g4,fontFamily:F,marginTop:10}}>Select customers above to run churn simulation</p></div>)}</div>);}
// ─── MARKET EXPANSION ───
function MktView(){const[selM,setSelM]=useState([]);const disc=0.12;
  const toggle=(n)=>setSelM(s=>s.includes(n)?s.filter(x=>x!==n):[...s,n]);
  const dcf=(m)=>{const revs=Array.from({length:5},(_,y)=>{const pen=m.pen1+(m.pen5-m.pen1)*(y/4);return m.sam*1000*pen/100*m.rpu;});
    const npv=revs.reduce((a,r,y)=>a+r/Math.pow(1+disc,y+1),0)-m.rdC;return{revs,tot:revs.reduce((a,b)=>a+b,0),npv:Math.round(npv),irr:Math.round(((revs.reduce((a,b)=>a+b,0)-m.rdC)/m.rdC)*100/5*100)/100};};
  const sD=selM.map(n=>{const m=MK.find(x=>x.n===n);return{...m,...dcf(m)};});
  const tI=sD.reduce((a,m)=>a+m.rdC,0);const tR=sD.reduce((a,m)=>a+m.tot,0);const tN=sD.reduce((a,m)=>a+m.npv,0);
  return(<div><h2 style={st}>Market Expansion & Strategic Investment</h2>
    <div style={crd}><div style={lb}>Adjacent Markets — Click to Model</div><div style={{overflowX:"auto"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:10}}>
        <thead><tr>{["","Market","TAM($B)","SAM($B)","PEN Yr1","PEN Yr5","R&D($K)","TTR(mo)","5yr Rev($K)","NPV($K)"].map(h=><th key={h} style={{...tH,fontSize:8}}>{h}</th>)}</tr></thead>
        <tbody>{MK.map((m,i)=>{const d=dcf(m);const on=selM.includes(m.n);
          return(<tr key={i} onClick={()=>toggle(m.n)} style={{cursor:"pointer",background:on?C.blue+"15":i%2?C.surf:"transparent"}}>
            <td style={{...tC,width:24}}><div style={{width:14,height:14,borderRadius:4,border:`2px solid ${on?C.blue:C.g5}`,background:on?C.blue:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{on&&<CheckCircle size={8} color={C.w}/>}</div></td>
            <td style={{...tC,fontWeight:600,color:C.w}}>{m.n}</td><td style={{...tC,fontFamily:FM}}>${m.tam}</td><td style={{...tC,fontFamily:FM}}>${m.sam}</td>
            <td style={{...tC,fontFamily:FM}}>{m.pen1}%</td><td style={{...tC,fontFamily:FM}}>{m.pen5}%</td><td style={{...tC,fontFamily:FM}}>${m.rdC.toLocaleString()}</td>
            <td style={{...tC,fontFamily:FM}}>{m.ttfr}</td><td style={{...tC,fontFamily:FM,color:C.teal}}>${Math.round(d.tot).toLocaleString()}</td>
            <td style={{...tC,fontFamily:FM,color:d.npv>0?C.green:C.red}}>${d.npv.toLocaleString()}</td></tr>);})}</tbody></table></div>
      <div style={{marginTop:10,padding:"10px 14px",background:C.surf,borderRadius:8,fontSize:10,color:C.g3,fontFamily:F,lineHeight:1.8}}>
        <strong style={{color:C.w}}>Column Definitions:</strong> TAM = Total Addressable Market ($B) | SAM = Serviceable Addressable Market ($B) | PEN Yr1/Yr5 = Audio Weaver penetration rate in year 1 and year 5 | R&D = R&D configuration investment to adapt Audio Weaver for this vertical ($K) | TTR = Time to First Revenue in months | 5yr Rev = Cumulative projected revenue over 5 years ($K) | NPV = Net Present Value at {disc*100}% discount rate ($K)</div></div>
    {selM.length>0&&<div style={{...crd,borderTop:`3px solid ${C.teal}`}}><div style={lb}>Selected Portfolio</div>
      <div style={rw}><MT label="Total R&D" value={`$${(tI/1000).toFixed(1)}M`} color={C.orange}/><MT label="5-Yr Rev" value={`$${(tR/1000).toFixed(1)}M`} color={C.teal}/>
        <MT label="NPV" value={`$${(tN/1000).toFixed(1)}M`} color={tN>0?C.green:C.red}/><MT label="ROI" value={`${Math.round((tR/tI-1)*100)}%`} color={C.green}/></div></div>}</div>);}

// ─── PARTNER ECONOMICS ───
function PartnerView(){const[pOn,setPOn]=useState(PA.map(()=>true));const toggle=(i)=>setPOn(s=>{const n=[...s];n[i]=!n[i];return n;});
  const active=PA.filter((_,i)=>pOn[i]);const tR=active.reduce((a,p)=>a+p.deals*p.avg,0);const tN=active.reduce((a,p)=>a+p.deals*p.avg*p.margin/100,0);
  const tE=active.reduce((a,p)=>a+p.enbl,0);
  return(<div><h2 style={st}>Partner Economics</h2>
    <div style={rw}><MT label="Partner Revenue" value={`$${(tR/1000).toFixed(1)}M`} sub={`${active.length} active`} color={C.blue}/>
      <MT label="Net After Partner" value={`$${(tN/1000).toFixed(1)}M`} sub={`${tR>0?Math.round(tN/tR*100):0}% blended`} color={C.green}/>
      <MT label="Enablement" value={`$${tE}K`} color={C.orange}/><MT label="Leverage" value={tE>0?`${Math.round(tR/tE)}x`:"-"} sub="Rev per $" color={C.teal}/></div>
    <div style={crd}><div style={lb}>Partner Roster — Toggle to Include/Exclude</div>
      <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:10}}>
        <thead><tr>{["","Partner","Type","Markets","Deals","Avg($K)","Gross($K)","Margin","Net($K)","Enable($K)"].map(h=><th key={h} style={{...tH,fontSize:8}}>{h}</th>)}</tr></thead>
        <tbody>{PA.map((p,i)=>{const gR=p.deals*p.avg;const net=Math.round(gR*p.margin/100);const on=pOn[i];
          return(<tr key={i} style={{background:on?(i%2?C.surf:"transparent"):C.red+"08",opacity:on?1:0.5}}>
            <td style={{...tC,width:24}}><div onClick={()=>toggle(i)} style={{width:16,height:16,borderRadius:4,border:`2px solid ${on?C.green:C.g5}`,background:on?C.green:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
              {on&&<CheckCircle size={9} color={C.w}/>}</div></td>
            <td style={{...tC,fontWeight:600,color:C.w}}>{p.n}</td><td style={{...tC,color:C.g3,fontSize:9}}>{p.type}</td>
            <td style={{...tC,fontSize:9,color:C.g3}}>{p.mkts.slice(0,2).join(", ")}</td><td style={{...tC,fontFamily:FM}}>{p.deals}</td>
            <td style={{...tC,fontFamily:FM}}>${p.avg}</td><td style={{...tC,fontFamily:FM,fontWeight:600}}>${gR.toLocaleString()}</td>
            <td style={tC}><div style={{display:"flex",alignItems:"center",gap:4}}><PB pct={p.margin} color={p.margin>75?C.green:C.orange} h={4}/><span style={{fontFamily:FM,fontSize:9}}>{p.margin}%</span></div></td>
            <td style={{...tC,fontFamily:FM,color:C.green}}>${net.toLocaleString()}</td><td style={{...tC,fontFamily:FM,color:C.orange}}>${p.enbl}</td></tr>);})}</tbody></table></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      {[{ch:"Direct Sales",time:"18-24 months",cost:"$1.2M",c:C.orange},{ch:"Partner Channel",time:"6-9 months",cost:"$80-150K",c:C.green}].map(x=>(
        <div key={x.ch} style={{...crd,borderLeft:`3px solid ${x.c}`}}><div style={{fontSize:12,fontWeight:700,color:C.w,fontFamily:F}}>{x.ch}</div>
          <div style={{fontSize:11,color:C.g2,fontFamily:F,marginTop:4}}>Time to revenue: <strong style={{color:x.c}}>{x.time}</strong></div>
          <div style={{fontSize:11,color:C.g3,fontFamily:F}}>Cost: {x.cost}</div></div>))}</div></div>);}

// ─── STRATEGIC OPTIONS ───
function StratView(){const[g,sG]=useState(25);const[m,sM]=useState(78);const[x,sX]=useState(12);const y3=21*Math.pow(1+g/100,3);
  return(<div><h2 style={st}>Strategic Options</h2>
    <div style={{...crd,background:C.blue+"0a",border:`1px solid ${C.blue}33`}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>
        {[["Growth",g,sG,10,50,"%",C.blue],["Margin",m,sM,60,90,"%",C.teal],["Multiple",x,sX,6,25,"x",C.purple]].map(([l,v,fn,mn,mx,u,c])=>(
          <div key={l}><div style={{fontSize:10,fontWeight:600,color:C.g3,fontFamily:F,marginBottom:3}}>{l}</div>
            <input type="range" min={mn} max={mx} value={v} onChange={e=>fn(+e.target.value)} style={{width:"100%",accentColor:c}}/>
            <div style={{fontSize:18,fontWeight:700,fontFamily:FM,color:c}}>{v}{u}</div></div>))}</div>
      <div style={{marginTop:6,fontSize:10,color:C.g3,fontFamily:F}}>Yr 3 ARR: <strong style={{color:C.w}}>${y3.toFixed(1)}M</strong></div></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
      {[{p:"IPO",v:y3*x,tl:"24-36 mo",dil:"15-20%",rk:"High",c:C.blue,cp:"$75M+ pref"},{p:"Strategic Sale",v:y3*(x+3),tl:"12-18 mo",dil:"100%",rk:"Med",c:C.teal,cp:"Cirrus $467M"},{p:"Growth Round",v:y3*(x-2),tl:"6-12 mo",dil:"20-30%",rk:"Low",c:C.purple,cp:"Series D"}].map(o=>(
        <div key={o.p} style={{...crd,borderTop:`4px solid ${o.c}`}}><div style={{fontSize:14,fontWeight:700,color:o.c,fontFamily:F,marginBottom:4}}>{o.p}</div>
          <div style={{fontSize:26,fontWeight:700,fontFamily:FM,color:C.w}}>${o.v.toFixed(0)}M</div>
          <div style={{fontSize:10,color:C.g4,fontFamily:F,marginBottom:8}}>Enterprise value</div>
          {[["Timeline",o.tl],["Dilution",o.dil],["Risk",o.rk]].map(([k,v])=>(<div key={k} style={{display:"flex",justifyContent:"space-between",fontSize:10,fontFamily:F,padding:"2px 0",borderBottom:`1px solid ${C.g7}`}}>
            <span style={{color:C.g4}}>{k}</span><span style={{fontWeight:600,color:C.w}}>{v}</span></div>))}
          <div style={{marginTop:6,fontSize:9,color:C.g4,fontFamily:F}}>{o.cp}</div></div>))}</div></div>);}

// ─── DATA ROOM ───
function DRView(){const pct=Math.round(DR.reduce((a,d)=>a+d.p,0)/DR.length);
  return(<div><h2 style={st}>Data Room</h2>
    <div style={rw}><MT label="Completion" value={`${pct}%`} color={pct>50?C.green:C.orange}/><MT label="VP Finance" value={DR.filter(d=>d.o==="[VP Finance]").length} sub="Awaiting" color={C.red}/><MT label="Docs" value={DR.reduce((a,d)=>a+d.d,0)} color={C.blue}/></div>
    <div style={crd}><table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}>
      <thead><tr>{["Category","Docs","%","Owner","Updated"].map(h=><th key={h} style={tH}>{h}</th>)}</tr></thead>
      <tbody>{DR.map((d,i)=>(<tr key={i} style={{background:i%2?C.surf:"transparent"}}>
        <td style={{...tC,fontWeight:600,color:C.w}}>{d.c}</td><td style={{...tC,fontFamily:FM}}>{d.d}</td>
        <td style={{...tC,width:140}}><div style={{display:"flex",alignItems:"center",gap:5}}><PB pct={d.p} color={d.p>=70?C.green:d.p>=40?C.orange:C.red} h={4}/><span style={{fontSize:9,fontFamily:FM}}>{d.p}%</span></div></td>
        <td style={{...tC,color:d.o==="[VP Finance]"?C.red:C.g3,fontWeight:d.o==="[VP Finance]"?700:400}}>{d.o}</td>
        <td style={{...tC,color:d.u==="Pending"?C.orange:C.g4}}>{d.u}</td></tr>))}</tbody></table></div></div>);}

// ─── GLOBAL ───
function GlobView(){const tot=GE.reduce((a,g)=>a+g.rev,0);
  return(<div><h2 style={st}>Global Operations</h2>
    <div style={rw}><MT label="Headcount" value="120" color={C.blue}/><MT label="Rev/Emp" value={`$${Math.round(tot*1000/120/1000)}K`} color={C.teal}/><MT label="FX Exp" value="$13.7M" sub="Unhedged" color={C.orange}/></div>
    <div style={crd}><div style={lb}>Entities</div><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginTop:8}}>
      {GE.map(g=>(<div key={g.n} style={{padding:12,background:C.surf,borderRadius:10,textAlign:"center",border:g.n.includes("HQ")?`2px solid ${C.blue}`:`1px solid ${C.g6}`}}>
        <div style={{fontSize:11,fontWeight:700,color:C.w,fontFamily:F}}>{g.n}</div><div style={{fontSize:9,color:C.g4,fontFamily:F,marginBottom:4}}>{g.ent}</div>
        <div style={{fontSize:18,fontWeight:700,fontFamily:FM,color:C.blue}}>${(g.rev/1000).toFixed(1)}M</div>
        <div style={{fontSize:9,color:C.g4,fontFamily:F,marginTop:3}}>{g.hc} emp · {g.cur}</div></div>))}</div></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <div style={crd}><div style={lb}>Transfer Pricing</div>
        {[{f:"US",t:"Germany",fl:"R&D sharing",r:"High"},{f:"US",t:"UK",fl:"Royalties",r:"Med"},{f:"US",t:"Taiwan",fl:"Service+IP",r:"Med"},{f:"Taiwan",t:"US",fl:"Design svc",r:"Low"}].map((x,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:5,marginBottom:5,padding:"6px 8px",background:C.surf,borderRadius:6}}>
            <span style={{fontSize:10,fontWeight:600,fontFamily:F,color:C.w,minWidth:45}}>{x.f}</span><ArrowRight size={10} color={C.blue}/>
            <span style={{fontSize:10,fontWeight:600,fontFamily:F,color:C.w,minWidth:50}}>{x.t}</span>
            <span style={{fontSize:9,color:C.g4,fontFamily:F,flex:1,textAlign:"right"}}>{x.fl}</span>
            <span style={{fontSize:8,fontWeight:600,padding:"2px 5px",borderRadius:5,background:x.r==="High"?C.red+"22":x.r==="Med"?C.orange+"22":C.green+"22",color:x.r==="High"?C.red:x.r==="Med"?C.orange:C.green}}>{x.r}</span></div>))}</div>
      <div style={crd}><div style={lb}>FX Exposure</div>
        <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:11}}>
          <thead><tr>{["Pair","Exp","Hedged"].map(h=><th key={h} style={tH}>{h}</th>)}</tr></thead>
          <tbody>{[{p:"USD/EUR",e:"$5.46M"},{p:"USD/GBP",e:"$3.78M"},{p:"USD/TWD",e:"$4.41M"}].map((f,i)=>(
            <tr key={i}><td style={{...tC,fontWeight:600,color:C.w}}>{f.p}</td><td style={{...tC,fontFamily:FM}}>{f.e}</td>
              <td style={tC}><span style={{fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:6,background:C.red+"22",color:C.red}}>No</span></td></tr>))}</tbody></table></div></div></div>);}
// ─── SWOT ───
function SwotView(){const[sc,setSc]=useState(0);const[inv,setInv]=useState({});const m=MK[sc];const sw=m.sw;
  const gI=(c,i)=>inv[`${sc}-${c}-${i}`]||0;const sI=(c,i,v)=>setInv(p=>({...p,[`${sc}-${c}-${i}`]:v}));
  const ct={w:sw.w.reduce((a,_,i)=>a+gI("w",i),0),t:sw.t.reduce((a,_,i)=>a+gI("t",i),0),s:sw.s.reduce((a,_,i)=>a+gI("s",i),0),o:sw.o.reduce((a,_,i)=>a+gI("o",i),0)};
  const gt=Object.values(ct).reduce((a,b)=>a+b,0);
  const at=MK.reduce((acc,_,mi)=>{const ms=MK[mi].sw;return acc+["s","w","o","t"].reduce((a2,c)=>a2+ms[c].reduce((a3,_,i)=>a3+(inv[`${mi}-${c}-${i}`]||0),0),0);},0);
  return(<div><h2 style={st}>SWOT Strategic Roadmap</h2>
    <div style={{display:"flex",gap:5,marginBottom:14,flexWrap:"wrap",overflowX:"auto"}}>{MK.map((mk,i)=>(<Btn key={i} active={sc===i} onClick={()=>setSc(i)}>{mk.n}</Btn>))}</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      {[{k:"s",t:"Strengths",c:C.green,a:"Amplify"},{k:"w",t:"Weaknesses",c:C.red,a:"Mitigate"},{k:"o",t:"Opportunities",c:C.teal,a:"Capture"},{k:"t",t:"Threats",c:C.orange,a:"Mitigate"}].map(q=>(
        <div key={q.k} style={{...crd,borderTop:`3px solid ${q.c}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontSize:13,fontWeight:700,color:q.c,fontFamily:F}}>{q.t}</span>
            <span style={{fontSize:10,fontFamily:FM,color:C.g3}}>${ct[q.k]}K</span></div>
          {sw[q.k].map((item,idx)=>(<div key={idx} style={{marginBottom:8,padding:8,background:C.surf,borderRadius:8}}>
            <div style={{fontSize:11,color:C.g1,fontFamily:F,marginBottom:4}}>{item}</div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:9,color:q.c,fontFamily:F,fontWeight:600,minWidth:45}}>{q.a}:</span>
              <input type="range" min={0} max={500} step={25} value={gI(q.k,idx)} onChange={e=>sI(q.k,idx,+e.target.value)} style={{flex:1,accentColor:q.c}}/>
              <span style={{fontSize:10,fontFamily:FM,color:C.w,minWidth:36,textAlign:"right"}}>${gI(q.k,idx)}K</span></div></div>))}</div>))}</div>
    <div style={{...crd,borderTop:`3px solid ${C.purple}`,marginTop:4}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><div style={lb}>{m.n} Investment</div><div style={{fontSize:22,fontWeight:700,fontFamily:FM,color:C.w}}>${gt.toLocaleString()}K</div></div>
        <div style={{textAlign:"right"}}><div style={lb}>All Markets</div><div style={{fontSize:22,fontWeight:700,fontFamily:FM,color:C.purple}}>${at.toLocaleString()}K</div></div></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginTop:10}}>
        {[{l:"Amplify",v:ct.s,c:C.green},{l:"Mitigate W",v:ct.w,c:C.red},{l:"Capture",v:ct.o,c:C.teal},{l:"Mitigate T",v:ct.t,c:C.orange}].map(x=>(
          <div key={x.l} style={{padding:8,background:C.surf,borderRadius:8,borderLeft:`3px solid ${x.c}`}}>
            <div style={{fontSize:9,color:C.g3,fontFamily:F}}>{x.l}</div><div style={{fontSize:14,fontWeight:700,fontFamily:FM,color:x.c}}>${x.v}K</div></div>))}</div></div></div>);}

// ─── EVENTS ───
function EventsView(){const[tab,setTab]=useState("conf");
  return(<div><h2 style={st}>Events Calendar</h2>
    <div style={{display:"flex",gap:4,marginBottom:14}}><Btn active={tab==="conf"} onClick={()=>setTab("conf")}>Industry Conferences</Btn><Btn active={tab==="uni"} onClick={()=>setTab("uni")}>University & Research</Btn></div>
    {tab==="conf"&&<div>{EV.map((e,i)=>(<div key={i} style={{...crd,borderLeft:`3px solid ${e.pri==="Must Attend"?C.green:e.pri==="Strategic"?C.blue:e.pri==="Consider"?C.orange:C.g4}`}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div><div style={{fontSize:14,fontWeight:700,color:C.w,fontFamily:F}}>{e.n}</div>
          <div style={{fontSize:11,color:C.teal,fontFamily:F,marginTop:2}}>{e.dt} · {e.loc}</div></div>
        <span style={{fontSize:9,fontWeight:700,padding:"3px 8px",borderRadius:6,background:e.pri==="Must Attend"?C.green+"22":e.pri==="Strategic"?C.blue+"22":C.orange+"22",
          color:e.pri==="Must Attend"?C.green:e.pri==="Strategic"?C.blue:C.orange}}>{e.pri}</span></div>
      <div style={{fontSize:10,color:C.g2,fontFamily:F,marginTop:6}}><strong style={{color:C.g3}}>Relevance:</strong> {e.rel}</div>
      <div style={{fontSize:10,color:C.g3,fontFamily:F,marginTop:2}}><strong>Key attendees:</strong> {e.key}</div></div>))}</div>}
    {tab==="uni"&&<div>{UN.map((u,i)=>(<div key={i} style={{...crd,borderLeft:`3px solid ${C.purple}`}}>
      <div style={{fontSize:14,fontWeight:700,color:C.w,fontFamily:F}}>{u.n}</div>
      <div style={{fontSize:11,color:C.teal,fontFamily:F,marginTop:2}}>{u.loc}</div>
      <div style={{fontSize:10,color:C.g2,fontFamily:F,marginTop:4}}><strong style={{color:C.g3}}>Focus:</strong> {u.focus}</div>
      <div style={{fontSize:10,color:C.g3,fontFamily:F,marginTop:2}}><strong>Faculty:</strong> {u.faculty}</div>
      <div style={{fontSize:10,color:C.g3,fontFamily:F,marginTop:2}}><strong>Relevance:</strong> {u.rel}</div></div>))}</div>}</div>);}

// ─── PATENTS ───
function PatentView(){const[sc,setSc]=useState(0);const cat=PT[sc];
  return(<div><h2 style={st}>Patent Landscape</h2>
    <p style={{fontSize:12,color:C.g3,fontFamily:F,marginBottom:14}}>Competitive IP intelligence across audio technology categories. Data represents approximate patent filing volumes from public USPTO/EPO records.</p>
    <div style={{display:"flex",gap:5,marginBottom:14,flexWrap:"wrap"}}>{PT.map((p,i)=>(<Btn key={i} active={sc===i} onClick={()=>setSc(i)}>{p.cat}</Btn>))}</div>
    <div style={crd}><div style={lb}>{cat.cat} — Patent Holdings by Company</div>
      {cat.holders.map((h,i)=>{const mx=Math.max(...cat.holders.map(x=>x.count));const isDSP=h.co.includes("DSP");
        return(<div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
          <div style={{width:120,fontSize:11,fontWeight:isDSP?700:500,fontFamily:F,color:isDSP?C.teal:C.g1,textAlign:"right"}}>{h.co}</div>
          <div style={{flex:1}}><div style={{height:22,background:isDSP?C.teal:C.blue,borderRadius:5,width:`${(h.count/mx)*100}%`,display:"flex",alignItems:"center",paddingLeft:8,opacity:isDSP?1:0.7}}>
            <span style={{fontSize:10,fontWeight:700,color:C.w,fontFamily:FM}}>{h.count}</span></div></div>
          <span style={{fontSize:12,width:20,textAlign:"center"}}>{h.trend}</span></div>);})}
      <div style={{marginTop:12,display:"flex",gap:10,fontSize:9,color:C.g4,fontFamily:F}}>
        <span>↑ Increasing filing rate</span><span>→ Stable</span><span style={{color:C.teal}}>■ DSP Concepts</span></div></div>
    <div style={{...crd,background:C.blue+"0a",border:`1px solid ${C.blue}33`}}>
      <div style={{fontSize:12,fontWeight:700,color:C.w,fontFamily:F,marginBottom:6}}>Strategic Observations</div>
      <div style={{fontSize:11,color:C.g2,fontFamily:F,lineHeight:1.8}}>
        {sc===0&&"HARMAN/Samsung dominates automotive audio IP with 342 patents. DSP Concepts holds 12 patents — the gap represents both a risk (limited defensive portfolio) and an opportunity (freedom to operate in adjacent spaces). Recommend accelerating patent filings around processor-agnostic audio middleware."}
        {sc===1&&"Bose and Apple lead noise cancellation IP. DSP Concepts has no patents in this category but partners with Bose (QuietComfort RNC on Audio Weaver). The partnership model mitigates IP risk while leveraging Bose's portfolio."}
        {sc===2&&"Amazon and Google dominate voice UI patents. DSP Concepts' TalkTo product operates under potential IP exposure. Recommend defensive patent filings around embedded voice preprocessing."}
        {sc===3&&"Dolby holds dominant position in spatial audio. This is a heavily patented space — market entry would require licensing agreements or careful design-around strategies."}
        {sc===4&&"Hearing aid IP is concentrated among Sonova and Demant. New entrants (Bose, Apple) are filing rapidly. White space exists in OTC hearing aid embedded processing — potential Audio Weaver opportunity."}
        {sc===5&&"EV sound design is a nascent patent category with relatively low filing volumes. DSP Concepts has early-mover advantage with 5 patents. Recommend aggressive filing to build defensible position before HARMAN and Continental catch up."}</div></div></div>);}

// ─── MAIN ───
export default function App(){const[view,setView]=useState("ceo");const[col,setCol]=useState(false);const[showRM,setShowRM]=useState(false);
  const rv=()=>{switch(view){
    case "ceo":return <CEOView/>;case "rev":return <RevView/>;case "fin":return <FinView/>;case "pipe":return <PipeView/>;
    case "perf":return <PerfView/>;case "churn":return <ChurnView/>;case "mkt":return <MktView/>;case "partner":return <PartnerView/>;
    case "strat":return <StratView/>;case "dr":return <DRView/>;case "global":return <GlobView/>;case "swot":return <SwotView/>;
    case "events":return <EventsView/>;case "patents":return <PatentView/>;default:return <CEOView/>;}};
  return(<div style={{display:"flex",fontFamily:F,background:C.bg,minHeight:"100vh",color:C.g1}}>
    {showRM&&<ReadMeModal onClose={()=>setShowRM(false)}/>}
    <div style={{width:col?52:220,minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column",transition:"width 0.3s",overflow:"hidden",position:"fixed",left:0,top:0,bottom:0,zIndex:50,borderRight:`1px solid ${C.g6}`}}>
      <div style={{padding:col?"14px 6px":"18px 14px",borderBottom:`1px solid ${C.g6}`}}>
        {!col&&<><div style={{fontSize:10,fontWeight:700,color:C.teal,letterSpacing:2,textTransform:"uppercase",fontFamily:F,marginBottom:3}}>DSP Concepts</div>
          <div style={{fontSize:15,fontWeight:700,color:C.w,fontFamily:F,letterSpacing:-0.3}}>CFO Operating System</div></>}
        {col&&<Zap size={18} color={C.teal} style={{margin:"0 auto",display:"block"}}/>}</div>
      <div style={{flex:1,padding:"6px 0",overflowY:"auto"}}>
        <div onClick={()=>setShowRM(true)} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",margin:"3px 6px 8px",
          borderRadius:10,cursor:"pointer",background:C.blue,color:C.w,fontSize:12,fontFamily:F,fontWeight:700,boxShadow:"0 2px 12px rgba(10,132,255,0.3)"}}>
          <BookOpen size={14}/>{!col&&<span>Read Me</span>}</div>
        {VIEWS.map(v=>(<div key={v.id} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",margin:"1px 6px",borderRadius:8,cursor:"pointer",
          background:view===v.id?C.blueD:"transparent",color:view===v.id?C.blue:C.g3,fontSize:12,fontFamily:F,fontWeight:view===v.id?600:400,whiteSpace:"nowrap"}}
          onClick={()=>setView(v.id)}><v.icon size={14}/>{!col&&<span>{v.l}</span>}</div>))}</div>
      <div style={{padding:col?"10px 6px":"14px",borderTop:`1px solid ${C.g6}`}}>
        {!col&&<div style={{fontSize:9,color:C.g4,fontFamily:F,lineHeight:1.5}}>Prepared by<br/><span style={{color:C.w,fontWeight:600}}>Hindol Datta</span><br/><span style={{color:C.g4}}>CPA · CMA · CIA · MBA</span></div>}
        <div onClick={()=>setCol(!col)} style={{cursor:"pointer",marginTop:6,textAlign:"center"}}>{col?<ChevronRight size={14} color={C.g4}/>:<ChevronLeft size={14} color={C.g4}/>}</div></div></div>
    <div style={{flex:1,marginLeft:col?52:220,transition:"margin-left 0.3s",padding:"20px 24px",maxWidth:1100}}>{rv()}</div></div>);}
