export default function QuickstartPage() {
    return (
        <article className="prose prose-invert max-w-none">
            <h1>Quickstart Guide</h1>
            <p className="lead">
                Get up and running with FillingBee in less than 5 minutes.
            </p>

            <section className="mt-8">
                <h2>1. Create an Account</h2>
                <p>
                    Go to the <a href="http://localhost:3001/auth/signup">Sign Up</a> page and create your organization account. You'll be automatically started on the Hobby plan.
                </p>
            </section>

            <section className="mt-8">
                <h2>2. Create Your First Form</h2>
                <p>
                    Once inside your dashboard, click the <strong>"Create New Form"</strong> button. This will open the FillingBee builder.
                </p>
                <ul>
                    <li>Add fields like "Email", "Full Name", or "Message".</li>
                    <li>Customize labels and placeholders.</li>
                    <li>Configure success messages.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2>3. Publish and Share</h2>
                <p>
                    Hit the <strong>"Publish"</strong> button. Your form is now live! You'll get a unique link (e.g., <code>fillingbee.com/forms/your-form-slug</code>) that you can share with anyone.
                </p>
            </section>

            <section className="mt-8">
                <h2>4. Collect Submissions</h2>
                <p>
                    When someone fills out your form, they'll verify their identity via a secure 6-digit OTP sent to their email. No account creation required for them! Submissions will appear instantly in your dashboard.
                </p>
            </section>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-primary mt-0">Next Steps</h3>
                <p className="mb-0">
                    Ready to automate? Check out our <a href="/docs/api-reference">API Reference</a> to learn how to fetch submissions programmatically.
                </p>
            </div>
        </article>
    )
}
