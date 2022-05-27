from .views import CardViewSet, CardCollectionViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register(r'cards', CardViewSet, basename='cardlist')
router.register(r'cardcollections', CardCollectionViewSet, basename='cardcollectionlist')
urlpatterns = router.urls
