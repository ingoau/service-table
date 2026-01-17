"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function CookieBanner() {
  const [isManagingPreferences, setIsManagingPreferences] = useState(false);
  const [showDialog, setShowDialog] = useState(true);
  if (!showDialog) return null;

  const cookieTypes = [
    "Session ID (keep your visit stateful while you browse)",
    "Anonymous session ID (pre-login session tracking)",
    "Auth session (stay logged in)",
    "Refresh token / long-lived login",
    '"Remember me" flag',
    "Login redirect destination (send you back after login)",
    "Logout invalidation marker",
    "Session rotation marker (security hardening)",
    "Account lockout state (too many attempts)",
    "Single sign-on (SSO) handshake state",
    "OAuth state parameter persistence (anti-forgery during auth)",
    "PKCE verifier persistence (OAuth security flow)",
    "MFA/2FA step tracking (during login)",
    "MFA device binding marker (this authenticator is linked)",
    "WebAuthn/passkey ceremony state",
    "Password reset flow token",
    "Email verification flow token",
    "Invite acceptance token (team/org invites)",
    "Impersonation/admin session marker (support/admin tools)",
    "CSRF token (stop forged form submissions)",
    "Anti-replay / nonce cookie (request integrity)",
    "SameSite compatibility fallback cookie (legacy browser handling)",
    "Content security policy reporting opt-in marker (rare)",
    "Device trust (this device is trusted)",
    "Device fingerprint correlation ID (where used)",
    "New device detection marker",
    "Suspicious login detection signals",
    "Risk-based auth score marker",
    "Fraud scoring / risk signals",
    "Chargeback/fraud prevention signal cookie (where used)",
    "Bot detection (challenge/allow list)",
    "Bot challenge bypass token (after successful challenge)",
    "CAPTCHA provider cookies",
    "Rate-limit / abuse protection counters",
    "API abuse prevention counters",
    "WAF / edge protection cookies",
    "IP reputation / allowlist marker (where used)",
    "DDoS mitigation cookies",
    "Request throttling bucket marker",
    "Load balancer sticky session cookie",
    "Upstream selection marker (which origin handled you)",
    "Blue/green deployment routing cookie (which stack you hit)",
    "Canary routing cookie (test new version for subset of users)",
    "Geo-routing cookie (nearest region)",
    "Failover routing cookie (keep you on a healthy cluster)",
    "CDN optimisation cookies (edge performance hints)",
    "Cache-variation cookies (serve correct cached version)",
    "Image optimisation preference cookie (e.g., AVIF/WebP hint)",
    "Bandwidth saver / low-data mode preference",
    "Feature flag assignment (enable/disable features)",
    "Gradual rollout bucket (percentage-based releases)",
    "A/B test assignment (variant A vs B)",
    "Multivariate test assignment",
    "Experiment holdout marker",
    "Experiment exposure marker (avoid double-counting)",
    "Personalisation bucket (tailored content)",
    "Recommended content seed (personalisation input)",
    "Logged-out personalisation ID (if used)",
    "Language preference",
    "Locale preference (language + formatting)",
    "Region/country preference",
    "Currency preference",
    "Timezone preference",
    "Units preference (metric/imperial)",
    "Date/time format preference",
    "Number format preference",
    "Theme (light/dark/system)",
    "Colour scheme preference",
    "Accessibility options (font size, contrast, reduced motion)",
    "Accessibility: screen-reader friendly mode",
    "Accessibility: dyslexia-friendly font toggle",
    "Accessibility: captions/subtitles preference",
    "Layout/view preference (grid/list)",
    "Navigation collapsed/expanded state",
    "Sidebar open/closed state",
    "Table column visibility preferences",
    "Table column order preferences",
    "Saved filters/sort order",
    "Pagination page-size preference",
    "Dismissed banners/toasts (don’t show again)",
    "Cookie banner dismissed (without a choice)",
    "Onboarding completion state",
    "Tour step progress",
    "Whats-new modal dismissed",
    "Changelog version last seen",
    "Feedback prompt snoozed state",
    "Form state / “remember what I typed”",
    "Autosave draft ID (draft content)",
    "Draft recovery token",
    "Multi-step wizard progress",
    "Client-side validation hints state",
    "Recently viewed items",
    "Recently searched terms (site search convenience)",
    "Saved searches",
    "Wishlist/favourites",
    "Compare list state",
    "Shopping cart contents",
    "Cart merge token (merge guest cart after login)",
    "Checkout step state",
    "Checkout guest email remembered",
    "Shipping address selection state",
    "Billing address selection state",
    "Shipping option selection",
    "Delivery window selection",
    "Pickup location selection",
    "Tax/VAT handling state",
    "Tax exemption certificate state (where used)",
    "Coupon/promo code applied",
    "Gift card applied state",
    "Store credit applied state",
    "Gift message state",
    "Order notes state",
    "Inventory reservation token (hold items briefly)",
    "Order submission idempotency key (prevent double orders)",
    "Payment attempt correlation ID",
    "Payment provider session cookie (third-party)",
    "3DS/secure payment flow state",
    "Payment method preference (e.g., card vs PayPal)",
    "Anti-fraud payment widget cookies",
    "Billing portal handoff token",
    "Subscription/plan selection state",
    "Trial eligibility marker",
    "Pricing experiment bucket",
    "Account settings state",
    "Profile completion prompts dismissed",
    "Organization/team selection state (multi-tenant apps)",
    "Active workspace/project ID",
    "Role selection state (if switching roles)",
    "Notification preferences cache (client hint)",
    "In-app notification read state (if stored client-side)",
    "Message center last seen marker",
    "Chat thread last opened marker",
    "File upload session tracking (multi-part uploads)",
    "Upload chunk tracker (resume uploads)",
    "Download entitlement token (access to files)",
    "Streaming entitlement token (media access)",
    "Age gate confirmation (e.g., 18+ acknowledgement)",
    "Content warning acknowledged",
    "Region-based compliance flag (EU/UK vs elsewhere)",
    "Do-not-track / privacy mode preference cookie",
    "Global privacy control preference mirror (where implemented)",
    "Cookie-consent banner state (accepted/declined)",
    "Consent categories chosen (granular preferences)",
    "Consent timestamp (when choice was made)",
    "Consent versioning (when policy changes)",
    "Vendor consent string (where used by CMPs)",
    "Legitimate interest marker (where applicable)",
    "Basic analytics anonymous visitor ID",
    "Analytics session counter",
    "Analytics sampling flag",
    "Pageview tracking",
    "Scroll-depth tracking",
    "Click/event tracking",
    "Outbound link tracking",
    "File download tracking",
    "Video engagement tracking",
    "Search analytics (internal search terms/events)",
    "Funnel/goal tracking",
    "Cohort/retention tracking",
    "Attribution model marker (first/last touch hint)",
    "New vs returning visitor marker",
    "Performance monitoring ID (RUM)",
    "Core Web Vitals sampling ID",
    "Latency/throughput sampling flags",
    "Error reporting correlation (tie errors to a session)",
    "Crash/exception fingerprint IDs",
    "Debug mode toggle (enable verbose logging)",
    "Support diagnostics token (share logs with support)",
    "Request correlation ID (debug/tracing)",
    "Release/version marker (which frontend build)",
    "Heatmap tracking ID",
    "Session replay ID",
    "User journey recording flag (if enabled)",
    "A/B testing analytics integration marker",
    "Conversion tracking cookie",
    "Signup conversion marker",
    "Purchase conversion marker",
    "Lead conversion marker (form submit)",
    "Campaign attribution (UTM persistence)",
    "Referrer persistence",
    "Landing page persistence",
    "Affiliate referral ID",
    "Partner tracking ID",
    "Promo partner attribution marker",
    "Call tracking / number swap identifiers",
    "Ad delivery identifiers",
    "Ad measurement identifiers",
    "Frequency capping (don’t show same ad too often)",
    "Retargeting identifiers",
    "Suppression list marker (don’t show certain ads)",
    "Ad platform pixel cookies",
    "Ad exchange / RTB identifiers",
    "ID sync / match tables (ad-tech)",
    "Cross-site identity linkage IDs (where used)",
    "Cross-device linking IDs (where used)",
    "Audience segment IDs",
    "Lookalike/audience seed marker (where used)",
    "Email marketing site-tracking ID",
    "Newsletter signup source tracking",
    "Newsletter pop-up dismissal",
    "Drip campaign eligibility marker",
    "CRM enrichment identifiers",
    "Personalisation from CRM segment marker",
    "Customer support chat widget cookies",
    "Helpdesk session ID",
    "Knowledge base personalisation",
    "In-app feedback widget cookies",
    "Bug report widget state",
    "Survey tool cookies",
    "NPS prompt already-answered marker",
    "Survey invitation suppression marker",
    "Commenting system cookies",
    "Community/forum login cookies",
    "Moderation/spam prevention cookies",
    "Spam honeypot state (anti-spam mechanisms)",
    "Social share button cookies",
    "Social embed state (e.g., consent for social content)",
    "Embedded video player cookies",
    "Embedded map widget cookies",
    "Embedded calendar widget cookies",
    "Third-party login cookies during auth flow",
    "Federated identity provider cookies (during sign-in)",
    "CDN/WAF vendor cookies (provider-specific)",
    "Queue/virtual waiting room token (high traffic)",
    "Ticketing/reservation hold token (events)",
    "Seat selection state",
    "Appointment booking state",
    "Scheduling timezone selection",
    "Multi-location selection state",
    "Education/proctoring session cookies (where used)",
    "Anti-cheating integrity checks (where used)",
    "License acceptance marker (EULA accepted)",
    "Terms update acknowledgement marker (rare)",
  ];
  return (
    <motion.div
      className="bg-red-500 p-10"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 3, ease: "linear" }}
    >
      <h1>We use cookies to improve your experience!</h1>
      Your privacy is our priority, so it is your choice to agree or decline.
      <br />
      {!isManagingPreferences && (
        <>
          <button
            className="p-10 text-4xl"
            onClick={() => setShowDialog(false)}
          >
            Agree
          </button>
          <button
            className="text-xs bg-transparent border-0 outline-0"
            onClick={() => setIsManagingPreferences(true)}
          >
            Manage preferences
          </button>
        </>
      )}
      {isManagingPreferences && (
        <>
          <button
            className="p-10 text-4xl sticky top-0 z-100"
            onClick={() => setShowDialog(false)}
          >
            Agree to all
          </button>
          <div className="flex flex-col gap-1">
            {cookieTypes.map((type, index) => (
              <div key={index} className="border p-2 max-w-fit">
                <input
                  type="checkbox"
                  id={`cookie-${index}`}
                  defaultChecked={true}
                />
                <label htmlFor={`cookie-${index}`} className="text-xs">
                  {type}
                </label>
              </div>
            ))}
            <button
              className="p-10 text-4xl "
              onClick={() => setShowDialog(false)}
            >
              Agree to all
            </button>
            <button
              className="text-sm w-fit bg-transparent border-0 outline-0"
              onClick={() => setShowDialog(false)}
            >
              Save preferences
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
