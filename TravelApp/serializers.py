from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    email_id = serializers.CharField(required=True)
    id = serializers.IntegerField(required=True)