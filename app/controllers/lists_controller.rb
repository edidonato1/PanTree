class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy ]
  # before_action :authorize_request

  def index
    @list = List.all

    render json: @list
  end


  def show
    render json: @list, include: :groceries
  end

  def update 
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def add_grocery
    @list = List.find(params[:list_id])
    @grocery = Grocery.new(grocery_params)
    if @grocery.save
      @list.groceries << @grocery
      render json: @list, include: :groceries
    else
      render json: @grocery.errors, status: :unprocessable_entity
    end
  end

  def move_grocery 
    @list = List.find(params[:list_id])
    @grocery = Grocery.find(params[:id])

    list.groceries << @grocery

    render json: @list, include: :groceries
  end

  def remove_grocery
    @list = List.find(params[:list_id])  
    @grocery = Grocery.find(params[:id])
    @list.groceries.delete(@grocery)

    render json: @list, include: :groceries
  end


  def create
    @list = List.new(list_params)

    if @list.save
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    def list_params 
      params.require(:list).permit(:user_id)
    end

    def grocery_params 
      params.require(:grocery).permit( :status, :time_left, :food_id)
    end
end
