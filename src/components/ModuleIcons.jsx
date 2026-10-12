import React from 'react';
import { 
  Code, 
  Cpu, 
  Terminal, 
  Binary, 
  Network, 
  Dices, 
  Bot, 
  MessageSquare,
  FileText,
  Calculator,
  Grid3X3
} from 'lucide-react';

export function ModuleIcon({ type, className = "w-6 h-6 text-blue-600" }) {
  switch (type) {
    case 'math':
      // Cursive A / math symbol style
      return (
        <span className={`inline-flex items-center justify-center font-serif italic text-xl font-bold text-blue-600 select-none ${className}`}>
          A
        </span>
      );
    case 'grid':
      return <Grid3X3 className={className} />;
    case 'code':
      return <Code className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'terminal':
      return <Terminal className={className} />;
    case 'integral':
      return (
        <span className={`inline-flex items-center justify-center font-serif italic text-xl font-bold text-blue-600 select-none ${className}`}>
          ƒ
        </span>
      );
    case 'branch':
      return <Network className={className} />;
    case 'dices':
      return <Dices className={className} />;
    case 'bot':
      return (
        <span className={`inline-flex items-center justify-center font-mono text-xs font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded select-none ${className}`}>
          AI
        </span>
      );
    case 'message':
      return <MessageSquare className={className} />;
    default:
      return <FileText className={className} />;
  }
}
