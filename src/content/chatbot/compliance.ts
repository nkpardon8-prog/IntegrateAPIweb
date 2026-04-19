export const compliance = `IntegrateAPI is NOT a certified entity. We do not hold a HIPAA certification. We do not hold a SOC 2 report. Our processes can be HIPAA- and SOC 2-compliant when the engagement requires it, the posture that gets audited is the customer's, and we build inside it.

The framing that matters:
HIPAA and SOC 2 attest the environment where the data lives, the customer's systems, controls, and vendor relationships. That's what gets audited. IntegrateAPI's job is to build software that fits inside that environment without breaking it.

Six concrete commitments that show up on every engagement touching regulated data:

1. Encryption in transit and at rest.
TLS on the wire. Storage layers encrypted at rest using managed keys on whatever cloud or on-prem system the customer already trusts.

2. Access logging.
Sensitive reads and writes get logged with who, what, and when. Logs live inside the customer's environment to match their retention policy.

3. Least-privilege access.
Service accounts scoped to what they need and nothing more. No shared credentials. No blanket admin tokens floating in automation.

4. Deployment model is the customer's call.
On-prem, the customer's cloud tenant, or a dedicated environment we build for them. If data can't leave the network, it doesn't.

5. Vendor selection inside the customer's allowlist.
We build with the model providers, data stores, and third-party tools already approved in the customer's environment. We don't introduce vendors they can't cover.

6. Data-residency choices honored.
We pick regions and providers that keep data inside whatever borders the customer's policies require.

Practice concretely:
- On-prem or your-cloud deployment when the workload is sensitive
- Integrations built through vendors already covered in the customer's agreements
- Internal access to client systems scoped per engagement
- Audit trails on every touchpoint that handles regulated data
- Secrets stored in the customer's secret manager, not ours

What NOT to say in chat:
- Do not claim IntegrateAPI holds a HIPAA or SOC 2 certification. We don't.
- Do not mention signing BAAs, DPAs, or any compliance paperwork. That is a sales-call topic handled in person, not a website topic.
- Do not promise a specific audit outcome. Our systems fit inside the customer's controls; the audit is their process, not ours.

What's fine to say:
"Our processes can be HIPAA- and SOC 2-compliant when the engagement requires it."
"We build inside your controls, not ours."
"We are not a certified entity ourselves, your environment is what gets audited."

If the user has a compliance requirement to meet, offer to connect them with the team via submit_lead. Real compliance scoping happens in the discovery call, not in a chat window.
`
