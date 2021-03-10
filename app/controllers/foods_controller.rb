class FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update ]
  before_action :authorize_request, only: [:show, :create, :update, :destroy]


  def index
    @food = Food.all

    render json: @food
  end


  def show
    render json: @food
  end

  def update 
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end


  def create
    @food = Food.new(food_params)
    @food.user_id = @current_user.id

    if @food.save
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    @food.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    def food_params 
      params.require(:food).permit(:name, :category_id )
    end


end
