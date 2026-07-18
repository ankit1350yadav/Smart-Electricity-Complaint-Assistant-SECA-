'use client';
import { motion } from 'framer-motion';
const scenes=[
  {time:'00:00',title:'Consumer reports outage',body:'A citizen speaks or types a complaint in their preferred Indian language.'},
  {time:'00:35',title:'AI classifies risk',body:'SECA detects category, severity, department, duplicate risk, and safety steps.'},
  {time:'01:15',title:'Offline-first submission',body:'If connectivity drops, the complaint is queued locally and synced later.'},
  {time:'01:55',title:'Admin triage',body:'Critical hazards appear in the live queue with engineer-ready summaries.'},
  {time:'02:30',title:'Citizen updates',body:'Status changes can trigger WhatsApp notifications and timeline updates.'}
];
export function JudgeDemo(){return <div className="grid gap-4 md:grid-cols-5">{scenes.map((scene,index)=><motion.article key={scene.time} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:index*.25,duration:.6}} className="glass rounded-2xl p-5"><p className="font-mono text-sm text-saffron">{scene.time}</p><h3 className="mt-2 font-black">{scene.title}</h3><p className="mt-2 text-sm opacity-75">{scene.body}</p></motion.article>)}</div>}
