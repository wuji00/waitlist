import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase credentials are properly set
const isSupabaseConfigured = supabaseUrl && supabaseKey && 
  !supabaseUrl.includes('your-project-id') && 
  !supabaseKey.includes('your-supabase-anon-key');

const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseKey) : null;

interface FormData {
  fullName: string;
  email: string;
}

const WaitlistForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      if (!isSupabaseConfigured) {
        throw new Error('Supabase is not configured');
      }
      const { error } = await supabase!
        .from('waitlist')
        .insert([{ full_name: data.fullName, email: data.email }]);

      if (error) throw error;
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Waitlist</h2>
        {!isSupabaseConfigured ? (
          <div className="text-center text-red-600">
            <p>Supabase credentials are not properly configured.</p>
            <p>Please check the .env file and follow the instructions to set up your Supabase project.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>
        )}
        {submitStatus === 'success' && (
          <p className="text-green-600 text-center mt-4">Thank you for joining our waitlist!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center mt-4">An error occurred. Please try again later.</p>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;