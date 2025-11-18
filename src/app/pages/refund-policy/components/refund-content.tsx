"use client";

import Link from "next/link";

export default function RefundContent() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
          <p>
            <strong>Effective Date:</strong> 7 Sep 2025
            <br />
            <strong>Website:</strong> Theaskt.org
            <br />
            <strong>Entity:</strong> Theaskt Learning Trust
          </p>

          <h2>1. Our Commitment</h2>
          <p>
            Theaskt.org is a mission-driven learning trust. Our goal is to provide accessible, high-quality education. We aim to keep our policies fair and transparent.
          </p>
          
          <h2>2. General Policy</h2>
          <p>
            Due to the digital nature of our courses and the immediate access provided upon enrollment, we generally do not offer refunds once a course has been accessed. However, we may consider exceptions under specific circumstances.
          </p>

          <h2>3. Refund Eligibility</h2>
          <p>A refund may be considered under the following conditions:</p>
          <ul>
            <li>
              <strong>Accidental Duplicate Purchase:</strong> If you accidentally purchase the same course more than once.
            </li>
            <li>
              <strong>Technical Issues:</strong> If you are unable to access the course due to technical problems from our side that we cannot resolve within a reasonable timeframe.
            </li>
          </ul>

          <h2>4. How to Request a Refund</h2>
          <p>
            To request a refund, you must contact our support team within 48 hours of your purchase. Please email <a href="mailto:support@theaskt.org">support@theaskt.org</a> with the following details:
          </p>
          <ul>
            <li>Your full name and email address</li>
            <li>The course name</li>
            <li>The reason for your refund request</li>
            <li>Proof of purchase (payment receipt)</li>
          </ul>

          <h2>5. Non-Refundable Situations</h2>
          <p>
            Refunds will not be provided in the following cases:
          </p>
          <ul>
            <li>Change of mind after purchase.</li>
            <li>Failure to complete the course.</li>
            <li>Dissatisfaction with the course content after accessing a significant portion of it.</li>
            <li>Violation of our <Link href="/terms-of-use">Terms of Use</Link>.</li>
          </ul>

          <h2>6. Scholarship Programs</h2>
          <p>
            Enrollments made through a scholarship (full or partial) are not eligible for a cash refund. The scholarship is non-transferable.
          </p>

          <h2>7. Cancellation Policy</h2>
          <p>
            You can cancel your enrollment at any time. However, cancellation after accessing the course content does not entitle you to a refund, except under the conditions mentioned above.
          </p>

          <h2>8. Policy Changes</h2>
          <p>
            We reserve the right to modify this Refund & Cancellation Policy at any time. Any changes will be posted on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about our Refund & Cancellation Policy, please contact us at <a href="mailto:support@theaskt.org">support@theaskt.org</a>.
          </p>

          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mt-12 not-prose">
              <p className="font-bold text-lg text-foreground">Our Goal</p>
              <p className="mt-4 text-foreground">
                  We strive to ensure every learner has a positive experience. If you are facing any issues, we encourage you to reach out to our support team so we can assist you.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
