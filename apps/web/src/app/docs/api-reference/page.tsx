export default function ApiReferencePage() {
    return (
        <article className="prose prose-invert max-w-none">
            <h1>API Reference</h1>
            <p className="lead">
                Integrate FillingBee into your applications using our powerful REST API.
            </p>

            <section className="mt-8">
                <h2>Authentication</h2>
                <p>
                    All API requests must be authenticated using a Bearer token in the <code>Authorization</code> header.
                </p>
                <div className="bg-[#0d1117] p-4 rounded-xl font-mono text-sm border border-white/5">
                    Authorization: Bearer YOUR_API_KEY
                </div>
            </section>

            <section className="mt-12">
                <h2>Forms API</h2>

                <h3>List Forms</h3>
                <p>Retrieve all forms within your organization.</p>
                <div className="bg-[#0d1117] p-4 rounded-xl font-mono text-sm border border-white/5 mb-4">
                    <span className="text-purple-400">GET</span> /v1/forms
                </div>

                <h3>Retrieve Submissions</h3>
                <p>Get a list of submissions for a specific form.</p>
                <div className="bg-[#0d1117] p-4 rounded-xl font-mono text-sm border border-white/5">
                    <div className="mb-2"><span className="text-purple-400">GET</span> /v1/forms/:id/submissions</div>
                    <div className="text-muted-foreground">Response:</div>
                    <pre className="text-green-400 text-xs">
                        {`{
  "data": [
    {
      "id": "sub_1",
      "data": { "email": "user@example.com", "msg": "Hello" },
      "created_at": "2024-01-10T..."
    }
  ]
}`}
                    </pre>
                </div>
            </section>

            <section className="mt-12">
                <h2>Webhooks</h2>
                <p>
                    Subscribe to events to receive real-time notifications when your forms are submitted.
                </p>
                <ul>
                    <li><code>form.submitted</code>: Triggered when a new submission is verified.</li>
                    <li><code>form.created</code>: Triggered when a new form is published.</li>
                </ul>
            </section>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-primary mt-0">Support</h3>
                <p className="mb-0">
                    Need help? Contact our developer support at <code>api@fillingbee.com</code>.
                </p>
            </div>
        </article>
    )
}
