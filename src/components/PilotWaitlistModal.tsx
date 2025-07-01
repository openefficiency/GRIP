import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface PilotWaitlistModalProps {
  children: React.ReactNode;
}

export const PilotWaitlistModal = ({ children }: PilotWaitlistModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    budget: "",
    pilotPlan: "",
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

  const budgetRanges = [
    "Under ₹20,000",
    "₹20,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "Above ₹1,00,000"
  ];

  const pilotPlans = [
    {
      id: "startup",
      name: "Startup (<100 employees)",
      regularPrice: "₹40,000/mo",
      pilotPrice: "₹20,000/mo"
    },
    {
      id: "mid-market",
      name: "Mid-Market (100-500)",
      regularPrice: "₹70,000/mo",
      pilotPrice: "₹35,000/mo"
    },
    {
      id: "enterprise",
      name: "Enterprise (500+)",
      regularPrice: "₹1,20,000/mo",
      pilotPrice: "₹60,000/mo"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

          <form 
            name="aegis-ai-pilot-waitlist" 
            method="POST" 
            data-netlify="true"
            className="space-y-6"
          >
            {/* Hidden input for Netlify form detection */}
            <input type="hidden" name="form-name" value="aegis-ai-pilot-waitlist" />

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="first_name"
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
                  name="last_name"
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
                name="email"
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
                name="company"
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
                <input type="hidden" name="role" value={formData.role} />
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
                <input type="hidden" name="team_size" value={formData.teamSize} />
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                What is your budget range (INR)? <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="budget" value={formData.budget} />
            </div>

            {/* Pilot Plan Selection */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Which plan are you interested in? <span className="text-red-500">*</span>
              </Label>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Plan</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Regular Price</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Pilot Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pilotPlans.map((plan) => (
                        <tr key={plan.id} className="border-b border-gray-100">
                          <td className="py-3 px-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="pilot_plan"
                                value={plan.name}
                                checked={formData.pilotPlan === plan.name}
                                onChange={(e) => handleInputChange('pilotPlan', e.target.value)}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                              />
                              <span className="text-sm font-medium text-gray-700">{plan.name}</span>
                            </label>
                          </td>
                          <td className="py-3 px-3 text-sm text-gray-600 line-through">{plan.regularPrice}</td>
                          <td className="py-3 px-3 text-sm font-semibold text-green-600">{plan.pilotPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Objectives */}
            <div className="space-y-2">
              <Label htmlFor="objectives" className="text-sm font-medium text-gray-700">
                What are your objectives with Aegis AI? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="objectives"
                name="objectives"
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
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Apply for Aegis AI Pilot Waitlist →
            </Button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              By submitting this form, you agree to receive updates about the Aegis AI pilot program. 
              We respect your privacy and won't share your information.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};