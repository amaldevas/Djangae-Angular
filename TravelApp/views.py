from django.http import HttpResponse
from rest_framework.response import Response
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from TravelApp.serializers import EmailSerializer
from django.views.decorators.csrf import csrf_exempt

@api_view(('GET','POST'))
def name(request):
	serializer_class = EmailSerializer
	serialized_data = EmailSerializer(data={"email_id":"amal",'id':122})
	if serialized_data.is_valid():
		return Response(serialized_data.data,  status=status.HTTP_200_OK)
	else:
		return Response(serialized_data.errors, status=status.HTTP_404_NOT_FOUND)
def index(request):
	return render(request, 'home.html')
@csrf_exempt
@api_view(('GET','POST'))
def getDetails(request):
	user=request.data
	print(user['name'])
	serializer_class = EmailSerializer
	serialized_data = EmailSerializer(data=request.data)
	if serialized_data.is_valid():
		return Response(serialized_data.data, status=status.HTTP_200_OK)
	else:
		return Response(serialized_data.errors, status=status.HTTP_404_NOT_FOUND)