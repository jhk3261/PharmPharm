# Generated by Django 4.2.3 on 2023-07-12 05:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('social', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('patient_name', models.TextField()),
                ('phone_number', models.IntegerField()),
                ('note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Pharmacist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pharmacist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='social.pharmacist')),
            ],
        ),
        migrations.CreateModel(
            name='HumanPharmacy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('human_pharmacy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='human_pharmacies', to='social.humandruginformation')),
            ],
        ),
        migrations.CreateModel(
            name='HumanInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('human_information', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='social.humaninformation')),
            ],
        ),
        migrations.CreateModel(
            name='HumanDrugInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('human_drug_information', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='social.humandruginformation')),
            ],
        ),
    ]
