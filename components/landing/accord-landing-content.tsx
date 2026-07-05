"use client";

const oldWay = [
  "High Marketplace Fees: Platforms take a brutal 10% to 20% cut of your hard-earned deal volume.",
  "Centralized Risks: Middlemen can freeze your funds or delay payouts for weeks over minor platform policy changes.",
  "Rigid Structures: Flat escrow systems don't adapt to complex, multi-milestone off-chain service deliverables.",
];

const accordWay = [
  "Flat 1.0% Settlement Fee: Keep 99% of your deal value with automated, rock-bottom smart contract execution costs.",
  "Non-Custodial Vaults: Funds sit securely in decentralized Injective smart contracts—accessible by neither party until milestones clear.",
  "Hybrid Discovery Rail: Seamlessly pair cryptographic on-chain financial trust with high-performance Web2 social and milestone tracking.",
];

const escrowSteps = [
  {
    step: "01 / Lock & Agree",
    body: "Parties establish agreement terms and milestones. Buyer securely locks funds into the Injective escrow contract vault.",
  },
  {
    step: "02 / Deliver & Track",
    body: "The service provider executes work, attaching project deliverables and cryptographic proofs directly to Accord’s discovery rail.",
  },
  {
    step: "03 / Instant Settlement",
    body: "Once milestones are validated by the buyer or oracle layer, the contract instantly auto-releases funds in under a second.",
  },
];

export function AccordLandingContent() {
  return (
    <div className="bg-white text-black">
      <section id="solutions" className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#ff6719]">
              Solutions
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-black md:text-6xl">
              Replace expensive middlemen with programmable settlement.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="border border-black/35 p-8 md:p-10">
              <h3 className="mb-8 font-display text-3xl tracking-tight text-black">
                Traditional Web2 Escrow
              </h3>
              <ul className="space-y-5 text-base leading-relaxed text-black/75 md:text-lg">
                {oldWay.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border-2 border-[#ff6719] p-8 shadow-[12px_12px_0_#0A1128] md:p-10">
              <h3 className="mb-8 font-display text-3xl tracking-tight text-black">
                The Accord Protocol Way
              </h3>
              <ul className="space-y-5 text-base leading-relaxed text-black/75 md:text-lg">
                {accordWay.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6719]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="escrow" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#ff6719]">
                Escrow
              </p>
              <h2 className="font-display text-4xl tracking-tight text-black md:text-6xl">
                How It Works
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-black/60 md:text-lg">
              Three clear steps from agreement to settlement, built for off-chain work and on-chain trust.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {escrowSteps.map((item) => (
              <article
                key={item.step}
                className="min-h-[280px] border border-black/20 bg-white p-8 transition-colors duration-300 hover:border-[#ff6719]"
              >
                <p className="mb-10 font-mono text-sm font-semibold uppercase tracking-widest text-[#ff6719]">
                  {item.step}
                </p>
                <p className="text-lg leading-relaxed text-black/75">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="disputes" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px] bg-[#0A1128] px-8 py-16 text-white md:px-14 lg:px-20 lg:py-24">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#ff6719]">
            Disputes
          </p>
          <h2 className="mb-8 max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
            Trustless, Non-Custodial Arbitration
          </h2>
          <p className="max-w-5xl text-lg leading-relaxed text-white/82 md:text-2xl">
            What happens if a deal goes wrong? Accord replaces biased corporate support teams with decentralized dispute resolution. If a dispute is raised, neutral community or algorithmic arbitrators review the cryptographic proofs on-chain. Funds stay locked safely in the vault until a fair verdict is reached, ensuring no centralized entity ever handles custody of your assets.
          </p>
        </div>
      </section>

      <section id="fees" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px] border border-black/10 bg-[#F7F7F4] p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#ff6719]">
                Fees
              </p>
              <h2 className="font-display text-4xl tracking-tight text-black md:text-6xl">
                Transparent Pricing Tracker
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-relaxed text-black/75 md:text-2xl">
              Flat 1.0% Per Successful Settlement. No monthly subscriptions. No setup fees. You only pay when a transaction is successfully completed and funds are released.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-6 py-24 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#ff6719]">
            Join The Waitlist / Beta Access
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-black md:text-6xl">
            Be the First to Secure Your Trades
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-black/65 md:text-xl">
            Accord is currently live on Testnet. Enter your email to get early access to the Mainnet launch, developer updates, and exclusive creator beta slots.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 border border-black/15 bg-white p-3 shadow-[0_24px_60px_rgba(10,17,40,0.08)] sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-h-14 flex-1 bg-transparent px-4 text-base text-black outline-none placeholder:text-black/40"
              aria-label="Enter your email address"
            />
            <button
              type="submit"
              className="min-h-14 bg-[#FF751F] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#e86412]"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
