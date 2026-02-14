export default function TermsPage() {
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
          Terms & <span className="text-[var(--primery)]">Conditions</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20
        rounded-xl p-8 shadow-lg space-y-6 text-gray-300">

          <p>
            Welcome to Reya AV. By accessing or using our website and
            services, you agree to comply with the following terms and
            conditions. Please read them carefully before using our services.
          </p>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Use of Services
            </h3>
            <p>
              Our services are provided for lawful business purposes only.
              You agree not to misuse our services or engage in activities
              that may harm our business or reputation.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Service Information
            </h3>
            <p>
              We strive to ensure that all service descriptions, pricing,
              and details are accurate. However, we reserve the right to
              update or modify information without prior notice.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Intellectual Property
            </h3>
            <p>
              All website content including text, graphics, images,
              and branding belongs to Reya AV and may not be copied,
              reproduced, or used without permission.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Limitation of Liability
            </h3>
            <p>
              Reya AV shall not be liable for any indirect or incidental
              damages resulting from the use of our services or website.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Changes to Terms
            </h3>
            <p>
              We may update these terms periodically. Continued use of
              our website indicates acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--primery)] font-semibold mb-2">
              Contact Information
            </h3>
            <p>
              For questions regarding these terms, please contact us
              through our official communication channels.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
