from .views import CardViewSet, FlashSetViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register(r'cards', CardViewSet, basename='cardlist')
router.register(r'flashsets', FlashSetViewSet, basename='flashsets')
urlpatterns = router.urls
