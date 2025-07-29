// MailerLite form initialization helper
(function() {
  // Wait for DOM to be ready
  function initializeMLForms() {
    if (typeof window.ml === 'function') {
      // Initialize the account
      window.ml('account', '1699461');
      
      // Force form rendering
      const forms = document.querySelectorAll('.ml-embedded');
      forms.forEach(form => {
        const formId = form.getAttribute('data-form');
        if (formId && window.ml) {
          // Hide loading placeholder
          const loading = form.querySelector('.ml-form-loading');
          if (loading) {
            loading.style.display = 'none';
          }
          
          // Force ML to render the form
          window.ml('show', formId, {
            target: form
          });
        }
      });
    } else {
      // Retry after a short delay if ML hasn't loaded yet
      setTimeout(initializeMLForms, 100);
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMLForms);
  } else {
    initializeMLForms();
  }
  
  // Also initialize on window load as fallback
  window.addEventListener('load', initializeMLForms);
})();