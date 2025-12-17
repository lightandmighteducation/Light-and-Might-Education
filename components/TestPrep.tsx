import React, { useEffect } from 'react';
import { BookOpen, Trophy, Clock, Users, Award, BookCheck, ClipboardList } from 'lucide-react';

const TestPrep: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tests = [
    { name: 'IELTS', desc: 'International English Language Testing System', score: 'Target 8.0+' },
    { name: 'TOEFL', desc: 'Test of English as a Foreign Language', score: 'Target 110+' },
    { name: 'GRE', desc: 'Graduate Record Examination', score: 'Target 320+' },
    { name: 'GMAT', desc: 'Graduate Management Admission Test', score: 'Target 700+' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-indigo-950 py-20 text-center text-white">
         <h1 className="text-5xl font-bold mb-4">Test Preparation</h1>
         <p className="text-xl text-indigo-200 max-w-2xl mx-auto">Expert coaching to help you smash your target scores.</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {tests.map(test => (
            <div key={test.name} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="w-32 h-32 text-indigo-900" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-2">{test.name}</h2>
              <p className="text-slate-600 mb-4 text-lg">{test.desc}</p>
              <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full font-bold text-sm">
                {test.score}
              </div>
            </div>
          ))}
        </div>

        {/* New Dedicated Section for IELTS & TOEFL */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-64 lg:h-auto">
                 <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                  alt="IELTS Coaching Class"
                  className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-indigo-900/40"></div>
                 <div className="absolute bottom-6 left-6 text-white p-4">
                   <h3 className="text-2xl font-bold mb-2">English Proficiency Excellence</h3>
                   <p className="opacity-90 font-medium">Unlock global opportunities with high scores</p>
                 </div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-indigo-950 mb-6">IELTS & TOEFL Coaching</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                   Our specialized coaching program is meticulously designed to target the specific requirements of IELTS (Academic/General) and TOEFL iBT. We focus on strategic learning to maximize your band score in Reading, Writing, Listening, and Speaking.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shrink-0">
                       <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Certified Trainers</h4>
                      <p className="text-slate-600 text-sm">Train with British Council & ETS certified mentors who provide personalized feedback, speaking evaluations, and essay corrections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
                       <BookCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Comprehensive Study Material</h4>
                      <p className="text-slate-600 text-sm">Get access to the latest Cambridge guides, official TOEFL prep packs, audio tracks for listening, and our exclusive strategy playbooks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-xl text-green-600 shrink-0">
                       <ClipboardList className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Regular Mock Tests</h4>
                      <p className="text-slate-600 text-sm">Weekly full-length computerized mock tests aimed at simulating the real exam environment, followed by detailed performance analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-indigo-950 mb-12">Why Train With Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-orange-500">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">Our students consistently achieve top percentile scores.</p>
            </div>
            <div className="text-center">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-orange-500">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Small Batches</h4>
              <p className="text-gray-600">Personalized attention with limited batch sizes.</p>
            </div>
            <div className="text-center">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-orange-500">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Timing</h4>
              <p className="text-gray-600">Weekend and weekday batches available for students & working professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPrep;