from django.shortcuts import render
from django.http import HttpResponse
from shop.models import Project


# Create your views here.

def shop_page(request):
    all_products = Project.objects.all
    return render(request, 'shop.html', {'all_products': all_products})


def test(request):
    return render(request, "test.html", {})
