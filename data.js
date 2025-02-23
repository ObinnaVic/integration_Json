const Spec = {
    "data": {
      "date": {
        "created_at": "2025-02-21",
        "updated_at": "2025-02-21"
      },
      "descriptions": {
        "app_description": "This is an application used to monitor the performance of a mongo database",
        "app_logo": "https://res.cloudinary.com/dprw6oeba/image/upload/v1739895224/database-floating-squares_78370-6689_lfv5hm.avif",
        "app_name": "MongoDB Performance Monitor",
        "app_url": "https://mongodb-monitor.onrender.com",
        "background_color": "#ffffff"
      },
      "integration_category": "Performance Monitoring",
      "integration_type": "interval",
      "is_active": true,
      "key_features": [
        "Handles authomatic query call to your db and sends performance data",
        "Check performance of your db in realtime",
        "Get notified on database current performance",
      ],
      "permissions": {
        "monitoring_user": {
          "always_online": true,
          "display_name": "Performance Monitor"
        }
      },
      "settings": [
        {
          "label": "interval",
          "type": "text",
          "required": true,
          "default": "0 */1 * * *"
        },
        {
          "label": "mongodb-url",
          "type": "text",
          "required": true,
          "default": "mongodb+srv://victornkire:vic08133232378@cluster0.xqm7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        },
      ],
      "tick_url": "https://mongodb-monitor.onrender.com/tick",
      "target_url": ""
    }
};

module.exports = {
    Spec
}
