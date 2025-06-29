import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
  trigger: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const LegalModal = ({ trigger, title, content }: LegalModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-800">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] px-6 pb-6">
          {content}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export const TermsOfServiceModal = ({ children }: { children: React.ReactNode }) => {
  const content = (
    <div className="prose prose-gray max-w-none">
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800 mb-0">
            <strong>Last Updated:</strong> January 2025
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h3>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using AegisWhistle services, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Service Description</h3>
          <p className="text-gray-600 leading-relaxed">
            AegisWhistle provides AI-powered workplace grievance management and whistleblowing protection services. 
            Our platform enables anonymous reporting and resolution of workplace issues through advanced AI technology.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. User Responsibilities</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide accurate and truthful information when using our services</li>
            <li>Use the platform only for legitimate workplace grievance reporting</li>
            <li>Respect the confidentiality and privacy of others</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Privacy and Confidentiality</h3>
          <p className="text-gray-600 leading-relaxed">
            We are committed to protecting your privacy and maintaining the confidentiality of all reports. 
            All communications are encrypted end-to-end, and your identity remains anonymous unless you choose to disclose it.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Limitation of Liability</h3>
          <p className="text-gray-600 leading-relaxed">
            AegisWhistle LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
            including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Modifications</h3>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
            Your continued use of the service constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Information</h3>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms of Service, please contact us at:
            <br />
            <strong>AegisWhistle LLC</strong>
            <br />
            Email: legal@aegiswhistle.com
            <br />
            Phone: +91 80 728 222 89
          </p>
        </section>
      </div>
    </div>
  );

  return (
    <LegalModal
      trigger={children}
      title="Terms of Service"
      content={content}
    />
  );
};

export const PrivacyPolicyModal = ({ children }: { children: React.ReactNode }) => {
  const content = (
    <div className="prose prose-gray max-w-none">
      <div className="space-y-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-800 mb-0">
            <strong>Last Updated:</strong> January 2025 | <strong>Effective Date:</strong> January 1, 2025
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700">Anonymous Reports</h4>
            <p className="text-gray-600 leading-relaxed">
              We collect information you provide when submitting workplace grievances, including the nature of the issue, 
              relevant details, and any supporting documentation. This information is encrypted and anonymized.
            </p>
            
            <h4 className="font-semibold text-gray-700">Technical Data</h4>
            <p className="text-gray-600 leading-relaxed">
              We may collect technical information such as IP addresses (which are immediately anonymized through Tor networks), 
              device information, and usage patterns to improve our services.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Process and investigate workplace grievances</li>
            <li>Provide AI-powered analysis and recommendations</li>
            <li>Generate anonymized reports for organizational improvement</li>
            <li>Ensure platform security and prevent abuse</li>
            <li>Comply with legal obligations while protecting whistleblower identity</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Data Protection Measures</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">🔒 Military-Grade Security</h4>
            <ul className="list-disc pl-6 text-blue-700 space-y-1">
              <li>End-to-end encryption for all communications</li>
              <li>Tor network routing for complete anonymity</li>
              <li>Zero-knowledge proofs to verify without revealing identity</li>
              <li>Secure data centers with SOC 2 Type II compliance</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Data Sharing and Disclosure</h3>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties. 
            We may share anonymized, aggregated data for research and improvement purposes. 
            We will only disclose personal information if required by law and with appropriate legal protections for whistleblowers.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Your Rights</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Right to remain anonymous throughout the process</li>
            <li>Right to access information about your reports</li>
            <li>Right to request deletion of your data (where legally permissible)</li>
            <li>Right to withdraw consent for data processing</li>
            <li>Right to data portability</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6. International Data Transfers</h3>
          <p className="text-gray-600 leading-relaxed">
            Your data may be processed in the United States and other countries where we operate. 
            We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Us</h3>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related questions or concerns, contact our Data Protection Officer:
            <br />
            <strong>AegisWhistle LLC</strong>
            <br />
            Email: privacy@aegiswhistle.com
            <br />
            Phone: +91 80 728 222 89
            <br />
            Address: Washington DC, United States
          </p>
        </section>
      </div>
    </div>
  );

  return (
    <LegalModal
      trigger={children}
      title="Privacy Policy"
      content={content}
    />
  );
};

export const SecurityModal = ({ children }: { children: React.ReactNode }) => {
  const content = (
    <div className="prose prose-gray max-w-none">
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-red-800 mb-0">
            <strong>Security Level:</strong> Military-Grade | <strong>Last Security Audit:</strong> December 2024
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">🔒 Encryption Standards</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>AES-256 Encryption:</strong> All data encrypted with military-grade standards</li>
              <li><strong>End-to-End Encryption:</strong> Messages encrypted from sender to recipient</li>
              <li><strong>Perfect Forward Secrecy:</strong> Each session uses unique encryption keys</li>
              <li><strong>Zero-Knowledge Architecture:</strong> We cannot access your unencrypted data</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">🌐 Anonymity Protection</h3>
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700">Tor Network Integration</h4>
            <p className="text-gray-600 leading-relaxed">
              All communications are routed through the Tor network, making it virtually impossible to trace your identity or location.
            </p>
            
            <h4 className="font-semibold text-gray-700">Zero-Knowledge Proofs</h4>
            <p className="text-gray-600 leading-relaxed">
              We use cryptographic proofs that verify the authenticity of reports without revealing any identifying information.
            </p>
            
            <h4 className="font-semibold text-gray-700">IP Address Protection</h4>
            <p className="text-gray-600 leading-relaxed">
              Your IP address is immediately anonymized and never stored in our systems.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">🛡️ Infrastructure Security</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Data Centers</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• SOC 2 Type II certified</li>
                <li>• 24/7 physical security</li>
                <li>• Biometric access controls</li>
                <li>• Redundant power systems</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Network Security</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• DDoS protection</li>
                <li>• Intrusion detection systems</li>
                <li>• Regular penetration testing</li>
                <li>• Security monitoring 24/7</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">🔍 Compliance & Auditing</h3>
          <div className="space-y-3">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Compliance Standards</h4>
              <ul className="list-disc pl-6 text-purple-700 space-y-1">
                <li>GDPR (General Data Protection Regulation)</li>
                <li>CCPA (California Consumer Privacy Act)</li>
                <li>SOX (Sarbanes-Oxley Act) compliance</li>
                <li>Whistleblower Protection Act compliance</li>
                <li>ISO 27001 Information Security Management</li>
              </ul>
            </div>
            
            <h4 className="font-semibold text-gray-700">Regular Security Audits</h4>
            <p className="text-gray-600 leading-relaxed">
              Independent security firms conduct quarterly audits of our systems, with annual penetration testing 
              to ensure the highest security standards.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">⚡ Incident Response</h3>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">24/7 Security Operations Center</h4>
            <p className="text-orange-700 text-sm leading-relaxed">
              Our dedicated security team monitors all systems around the clock. In the unlikely event of a security incident, 
              we have a comprehensive response plan that includes immediate containment, investigation, and user notification 
              within 72 hours as required by law.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">📞 Security Contact</h3>
          <p className="text-gray-600 leading-relaxed">
            For security-related concerns or to report vulnerabilities:
            <br />
            <strong>Security Team - AegisWhistle LLC</strong>
            <br />
            Email: security@aegiswhistle.com
            <br />
            Phone: +91 80 728 222 89
            <br />
            <span className="text-sm text-gray-500">
              (We offer bug bounty rewards for responsible disclosure of security vulnerabilities)
            </span>
          </p>
        </section>
      </div>
    </div>
  );

  return (
    <LegalModal
      trigger={children}
      title="Security Information"
      content={content}
    />
  );
};