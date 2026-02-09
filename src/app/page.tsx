"use client";
import React, { useState } from 'react';
import { Mic2, FileText, Wand2, Music, CheckCircle } from 'lucide-react';

export default function PodcastAssistant() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');

  const process = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-3 rounded-2xl shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              <Mic2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold italic tracking-tighter">PODFLOW</h1>
              <div className="h-1 w-full bg-purple-600 rounded-full" />
            </div>
          </div>
          <button className="bg-zinc-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-colors">
            Upload Audio
          </button>
        </header>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-10 backdrop-blur-xl">
          <div className="flex gap-4 mb-10 border-b border-zinc-800 pb-6">
            <TabButton active={activeTab === 'notes'} onClick={() => setActiveTab('notes')} icon={<FileText className="w-4 h-4" />} label="Show Notes" />
            <TabButton active={activeTab === 'clips'} onClick={() => setActiveTab('clips')} icon={<Wand2 className="w-4 h-4" />} label="Social Clips" />
            <TabButton active={activeTab === 'assets'} onClick={() => setActiveTab('assets')} icon={<Music className="w-4 h-4" />} label="Brand Assets" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">The Future of AI Bassists</h2>
                <p className="text-zinc-400 leading-relaxed">
                  In this episode, we talk with Mark Steven about the integration of AI in modern bass tracking and how it's changing the landscape for session musicians.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <h3 className="text-sm font-bold text-purple-400 uppercase mb-4 tracking-widest">Chapters</h3>
                <div className="space-y-4">
                  <Chapter time="02:15" title="Introduction to AI in Bass" />
                  <Chapter time="10:45" title="The Paragon Design Workflow" />
                  <Chapter time="25:30" title="Live Music vs Studio AI" />
                </div>
              </div>
            </div>

            <div className="bg-purple-600/10 border border-purple-500/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <CheckCircle className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Ready for Export</h4>
              <p className="text-zinc-400 text-sm mb-6">Your social media kit and show notes have been generated.</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20">
                Download Everything
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all text-sm font-medium ${active ? 'bg-purple-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
    >
      {icon} {label}
    </button>
  );
}

function Chapter({ time, title }: any) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <span className="font-mono text-zinc-500 group-hover:text-purple-400 transition-colors">{time}</span>
      <div className="h-px flex-grow bg-zinc-800" />
      <span className="text-zinc-300 group-hover:text-white transition-colors">{title}</span>
    </div>
  );
}
