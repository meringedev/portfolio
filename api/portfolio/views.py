from rest_framework import viewsets
from rest_framework.response import Response
from .models import Projects
from .serializers import ProjectsSerializer
# Create your views here.

class ProjectsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProjectsSerializer
    queryset = Projects.objects.all()