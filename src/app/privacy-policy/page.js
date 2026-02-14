export default function PrivacyPolicyPage() {
  return (
    <div
      className="px-4 md:px-10 lg:px-30 p-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-0
  after:w-full after:h-full
  after:bg-[var(--primery)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-white">

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold mb-6">
          Privacy <span className="text-[var(--primery)]">Policy</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20
        rounded-xl p-8 shadow-lg space-y-6 text-gray-300">

          <p>
            At Reya AV, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website or use our services.
          </p>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Information We Collect
            </h3>
            <p>
              We may collect personal information such as your name,
              phone number, email address, and enquiry details when
              you contact us through our website, email, or phone.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              How We Use Your Information
            </h3>
            <p>
              The information collected is used to respond to enquiries,
              provide services, improve customer experience, and share
              relevant updates about our offerings.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Data Protection
            </h3>
            <p>
              We implement appropriate security measures to protect your
              personal data from unauthorized access, alteration, or
              disclosure.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Third-Party Sharing
            </h3>
            <p>
              We do not sell or share your personal information with
              third parties except where required by law or necessary
              to deliver our services.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Updates to This Policy
            </h3>
            <p>
              This Privacy Policy may be updated periodically.
              Continued use of our website indicates acceptance
              of any changes.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Contact Us
            </h3>
            <p>
              If you have any questions about this Privacy Policy,
              please contact us via our website or official
              communication channels.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
