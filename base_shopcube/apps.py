from django.apps import AppConfig


class BaseShopcubeConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "base_shopcube"

    def ready(self):
        import base_shopcube.signals
