export function ContactInfo() {
  const contactItems = [
    { icon: '📧', label: 'Email', value: 'amatin832@gmail.com', href: 'mailto:amatin832@gmail.com' },
    { icon: '📍', label: 'Location', value: 'ACCRA, GH' },
    { icon: '📱', label: 'Phone', value: '+233 24 253 7328', href: 'tel:+233242537328' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-display font-semibold">Contact Information</h2>
      <div className="space-y-4">
        {contactItems.map(item => (
          <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl glass">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-sm text-primary/40 dark:text-white/40">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-medium hover:text-gold transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}