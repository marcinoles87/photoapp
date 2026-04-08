import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createClient} from 'supabase'
import {SesionContexProvider} from 'supabase'


  const supabase = createClient('https://sttdevzmdstzhlralfyn.supabase.co','sb_publishable_pABpURHMdGrZkneaQujZFQ_d3zDzvxt')


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

        <React.StrictMode>
                <SesionContexProvider supabaseClient={supabase}>
                        <App />
                </SesionContexProvider>
                   

        </React.StrictMode>
  
     
  


);


