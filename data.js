const Spec = {
    "data": {
      "date": {
        "created_at": "2025-02-18",
        "updated_at": "2025-02-18"
      },
      "descriptions": {
        "app_description": "This is an application used to monitor the performance of a mongo database",
        "app_logo": "https://res.cloudinary.com/dprw6oeba/image/upload/v1739895224/database-floating-squares_78370-6689_lfv5hm.avif",
        "app_name": "MongoDB Performance Monitor",
        "app_url": "https://mongodb-monitor.onrender.com",
        "background_color": "#f4fc03"
      },
      "integration_category": "Performance Monitoring",
      "integration_type": "interval",
      "is_active": true,
      "output": [],
      "key_features": [
        "Handles authomatic query call to your db and sends performance data",
      ],
      "permissions": {
        "monitoring_user": {
          "always_online": true,
          "display_name": "Performance Monitor"
        }
      },
      "settings": [
        {
          "label": "Mongodb url",
          "default": "your db url: mongodb.......",
          "type": "text",
          "required": true
        },
        {
          "label": "interval",
          "type": "text",
          "required": true,
          "default": "* * * * *"
        },
      ],
      "tick_url": "https://mongodb-monitor.onrender.com/tick",
    }
}

module.exports = {
    Spec
}