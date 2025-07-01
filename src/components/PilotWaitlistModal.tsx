import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";

interface PilotWaitlistModalProps {
  children: React.ReactNode;
}

export const PilotWaitlistModal = ({ children }: PilotWaitlistModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    objectives: ""
  });

  const roles = [
    "CEO/Founder",
    "CTO/VP Engineering", 
    "CHRO/VP People",
    "Head of Operations",
    "Compliance Officer",
    "Legal Counsel",
    "Department Manager",
    "HR Manager",
    "Other"
  ];

  const teamSizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/myzjolor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          team_size: formData.teamSize,
          objectives: formData.objectives,
          formType: 'Aegis AI Pilot Waitlist Application'
        }),
      });

      if (response.ok) {
        setIsOpen(false);
        setShowSuccessDialog(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          role: "",
          teamSize: "",
          objectives: ""
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWatchAegisAI = () => {
    setShowSuccessDialog(false);
    window.open('https://BackFeed.XYZ', '_blank');
  };

  const handleBackToSite = () => {
    setShowSuccessDialog(false);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.company && formData.role && formData.teamSize && formData.objectives;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-4 pb-6">
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Apply for Aegis AI Pilot Waitlist
            </DialogTitle>
            <p className="text-lg text-gray-600 leading-relaxed">
              Be among the first to experience{" "}
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105 font-semibold">
                  Aegis AI
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
              </a>
              {" "}that truly listens. Help shape the future of employee engagement.
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Work Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="w-full"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                className="w-full"
              />
            </div>

            {/* Role and Team Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                  Your Role <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamSize" className="text-sm font-medium text-gray-700">
                  Team Size <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Objectives */}
            <div className="space-y-2">
              <Label htmlFor="objectives" className="text-sm font-medium text-gray-700">
                What are your objectives with Aegis AI? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="objectives"
                placeholder="Tell us about your goals and how you plan to use Aegis AI..."
                value={formData.objectives}
                onChange={(e) => handleInputChange('objectives', e.target.value)}
                required
                className="w-full min-h-[100px] resize-none"
              />
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                What you'll get as a pilot participant:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Early access to advanced Aegis AI conversation platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Direct feedback channel to our product team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Exclusive pilot pricing and extended pilot period</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Priority support and onboarding assistance</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  Apply for Aegis AI Pilot Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              By submitting this form, you agree to receive updates about the Aegis AI pilot program. 
              We respect your privacy and won't share your information.
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-gray-800">
              Application Submitted!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 leading-relaxed">
              Thank you for applying to the{" "}
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105 font-semibold">
                  Aegis AI
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
              </a>
              {" "}pilot program. We'll review your application and get back to you soon.
              <br /><br />
              Would you like to see{" "}
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105 font-semibold">
                  Aegis AI
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
              </a>
              {" "}in action right now?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-3">
            <AlertDialogCancel 
              onClick={handleBackToSite}
              className="w-full sm:w-auto"
            >
              Back to Site
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleWatchAegisAI}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Watch Aegis AI in Action →
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};