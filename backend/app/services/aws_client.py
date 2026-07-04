import boto3
from app.config.settings import AWS_REGION


def get_ec2_client():
    """
    Returns a boto3 EC2 client using the configured AWS region.
    AWS credentials are automatically picked up from AWS CLI.
    """
    return boto3.client(
        "ec2",
        region_name=AWS_REGION
    )