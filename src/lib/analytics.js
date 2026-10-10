// Utility helper for dispatching Google Analytics 4 (GA4) events

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

// Common tracking actions
export const trackCtaClick = (buttonName, location = "general") => {
  trackEvent("click_cta", {
    button_name: buttonName,
    location,
  });
};

export const trackLeadSubmission = (service, formName = "contact_form") => {
  trackEvent("generate_lead", {
    event_category: "Conversion",
    form_name: formName,
    service_selected: service,
  });
};

export const trackBlogPostClick = (post) => {
  trackEvent("select_content", {
    content_type: "blog_post",
    item_id: post.id,
    item_name: post.title,
    destination_url: post.url,
    category: post.tags?.[0] || "general",
  });
};

export const trackContactMethod = (method, value) => {
  trackEvent("contact_click", {
    contact_type: method, // 'email' | 'phone' | 'whatsapp'
    contact_value: value,
  });
};
